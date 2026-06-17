mod ascii;

use std::{fmt::Write, str::from_utf8};

use serde::Serialize;

use crate::ascii::{ascii_symbol, byte_to_printable_ascii};

#[derive(Serialize)]
pub struct FileRow {
    pub bytes: Vec<u8>,
    pub hexadecimal: Vec<String>,
    pub ascii: Vec<String>,
    pub hex_offset: String,
}

pub fn read(file_bytes: &[u8], from_byte: u32, length: u32) -> Vec<FileRow> {
    let end = (from_byte + length).min(file_bytes.len() as u32);
    file_bytes[(from_byte as usize)..end as usize]
        .chunks(16)
        .enumerate()
        .map(|(index, bytes)| FileRow {
            hex_offset: format!("0x{:08x}", from_byte as usize + index * 16),
            bytes: bytes.to_vec(),
            hexadecimal: bytes
                .iter()
                .map(|b| format!("{:02x}", b))
                .collect::<Vec<_>>(),
            ascii: bytes
                .iter()
                .map(|b| byte_to_printable_ascii(*b))
                .collect::<Vec<_>>(),
        })
        .collect::<Vec<_>>()
}

#[derive(Serialize)]
pub struct Details {
    pub binary: String,
    pub ascii_symbol: String,
    pub utf8: Option<Utf8Detail>,
    pub decimal_8: DecimalDetail,
    pub decimal_16: Option<DecimalDetail>,
    pub decimal_32: Option<DecimalDetail>,
    pub decimal_64: Option<DecimalDetail>,
    pub decimal_128: Option<DecimalDetail>,
}

#[derive(Serialize)]
pub struct Utf8Detail {
    pub value: String,
    pub byte_start: usize,
    pub byte_end: usize,
    pub hex: String,
}

#[derive(Serialize)]
pub struct DecimalDetail {
    pub be: String,
    pub le: String,
    pub hex: String,
}

pub fn details(file_bytes: &[u8], from_byte: u32) -> Details {
    let current_byte = file_bytes[from_byte as usize];
    let u8_details = (
        u8::from_be_bytes([current_byte]),
        u8::from_le_bytes([current_byte]),
    );

    let u16_details = file_bytes
        .get(from_byte as usize..(from_byte + 2) as usize)
        .and_then(|b| b.try_into().ok())
        .map(|arr| (u16::from_be_bytes(arr), u16::from_le_bytes(arr)));

    let u32_details = file_bytes
        .get(from_byte as usize..(from_byte + 4) as usize)
        .and_then(|b| b.try_into().ok())
        .map(|arr| (u32::from_be_bytes(arr), u32::from_le_bytes(arr)));

    let u64_details = file_bytes
        .get(from_byte as usize..(from_byte + 8) as usize)
        .and_then(|b| b.try_into().ok())
        .map(|arr| (u64::from_be_bytes(arr), u64::from_le_bytes(arr)));

    let u128_details = file_bytes
        .get(from_byte as usize..(from_byte + 16) as usize)
        .and_then(|b| b.try_into().ok())
        .map(|arr| (u128::from_be_bytes(arr), u128::from_le_bytes(arr)));

    let utf8 = utf8_details(from_byte as usize, file_bytes);

    Details {
        binary: format!("{:08b}", current_byte),
        ascii_symbol: ascii_symbol(current_byte),
        utf8,
        decimal_8: DecimalDetail {
            be: u8_details.0.to_string(),
            le: u8_details.1.to_string(),
            hex: to_hex_2(u8_details.0),
        },
        decimal_16: u16_details.map(|x| DecimalDetail {
            be: x.0.to_string(),
            le: x.1.to_string(),
            hex: to_hex_4(x.0),
        }),
        decimal_32: u32_details.map(|x| DecimalDetail {
            be: x.0.to_string(),
            le: x.1.to_string(),
            hex: to_hex_8(x.0),
        }),
        decimal_64: u64_details.map(|x| DecimalDetail {
            be: x.0.to_string(),
            le: x.1.to_string(),
            hex: to_hex_16(x.0),
        }),
        decimal_128: u128_details.map(|x| DecimalDetail {
            be: x.0.to_string(),
            le: x.1.to_string(),
            hex: to_hex_32(x.0),
        }),
    }
}

fn utf8_details(byte_offset: usize, file_bytes: &[u8]) -> Option<Utf8Detail> {
    match file_bytes[byte_offset] {
        0..=127 => utf8_details_from_range(byte_offset, byte_offset, file_bytes),
        192..=223 => utf8_details_from_range(byte_offset, byte_offset + 1, file_bytes),
        224..=239 => utf8_details_from_range(byte_offset, byte_offset + 2, file_bytes),
        240..=247 => utf8_details_from_range(byte_offset, byte_offset + 3, file_bytes),
        128..=191 => find_hex_from_continuation(byte_offset, file_bytes),
        248..=255 => None,
    }
}

fn find_hex_from_continuation(byte_offset: usize, file_bytes: &[u8]) -> Option<Utf8Detail> {
    for step in 1..=3 {
        let decimal = byte_offset
            .checked_sub(step)
            .and_then(|x| file_bytes.get(x))
            .map(|byte| u8::from_be_bytes([*byte]));

        if let Some(decimal) = decimal {
            match decimal {
                0..=127 => {
                    return utf8_details_from_range(
                        byte_offset - step,
                        byte_offset - step,
                        file_bytes,
                    );
                }
                192..=223 => {
                    return utf8_details_from_range(
                        byte_offset - step,
                        byte_offset - step + 1,
                        file_bytes,
                    );
                }
                224..=239 => {
                    return utf8_details_from_range(
                        byte_offset - step,
                        byte_offset - step + 2,
                        file_bytes,
                    );
                }
                240..=247 => {
                    return utf8_details_from_range(
                        byte_offset - step,
                        byte_offset - step + 3,
                        file_bytes,
                    );
                }
                128..=191 => (),
                248..=255 => return None,
            };
        }
    }

    None
}

fn utf8_details_from_range(start: usize, end: usize, file_bytes: &[u8]) -> Option<Utf8Detail> {
    file_bytes
        .get(start..=end)
        .and_then(|bytes| from_utf8(bytes).map(|utf8| (utf8, bytes)).ok())
        .map(|(utf8, bytes)| Utf8Detail {
            value: utf8.to_string(),
            byte_start: start,
            byte_end: end,
            hex: to_hex(bytes),
        })
}

fn to_hex(bytes: &[u8]) -> String {
    let mut hex = String::with_capacity(bytes.len() + 2);

    write!(&mut hex, "0x").unwrap();

    for ele in bytes {
        write!(&mut hex, "{:02x}", ele).unwrap();
    }

    hex
}

fn to_hex_2(decimal: u8) -> String {
    format!("0x{:02x}", decimal)
}

fn to_hex_4(decimal: u16) -> String {
    format!("0x{:04x}", decimal)
}

fn to_hex_8(decimal: u32) -> String {
    format!("0x{:08x}", decimal)
}

fn to_hex_16(decimal: u64) -> String {
    format!("0x{:016x}", decimal)
}

fn to_hex_32(decimal: u128) -> String {
    format!("0x{:032x}", decimal)
}

#[cfg(test)]

mod tests {
    use super::*;

    #[test]
    fn utf8_one_byte() {
        let bytes = b"A";
        let result = utf8_details(0, bytes);

        assert!(result.is_some());
        let result_value = result.unwrap();
        assert_eq!(result_value.byte_start, 0);
        assert_eq!(result_value.byte_end, 0);
        assert_eq!(result_value.value, "A");
    }

    #[test]
    fn utf8_two_bytes() {
        let bytes = "é".as_bytes();
        let result = utf8_details(0, bytes);

        assert!(result.is_some());
        let result_value = result.unwrap();
        assert_eq!(result_value.byte_start, 0);
        assert_eq!(result_value.byte_end, 1);
        assert_eq!(result_value.value, "é");
    }

    #[test]
    fn utf8_three_bytes() {
        let bytes = "中".as_bytes();
        let result = utf8_details(0, bytes);

        assert!(result.is_some());
        let result_value = result.unwrap();
        assert_eq!(result_value.byte_start, 0);
        assert_eq!(result_value.byte_end, 2);
        assert_eq!(result_value.value, "中");
    }

    #[test]
    fn utf8_four_bytes() {
        let bytes = "😀".as_bytes();
        let result = utf8_details(0, bytes);

        assert!(result.is_some());
        let result_value = result.unwrap();
        assert_eq!(result_value.byte_start, 0);
        assert_eq!(result_value.byte_end, 3);
        assert_eq!(result_value.value, "😀");
    }

    #[test]
    fn utf8_current_continuation_two_bytes() {
        let bytes = "é".as_bytes();
        let result = utf8_details(1, bytes);

        assert!(result.is_some());
        let result_value = result.unwrap();
        assert_eq!(result_value.byte_start, 0);
        assert_eq!(result_value.byte_end, 1);
        assert_eq!(result_value.value, "é");
    }
}
