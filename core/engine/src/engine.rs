mod ascii;

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
        .map(|(index, bytes)| {
            return FileRow {
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
            };
        })
        .collect::<Vec<_>>()
}

#[derive(Serialize)]
pub struct Details {
    pub binary: String,
    pub ascii_symbol: String,
    pub decimal_8: DecimalDetail,
    pub decimal_16: Option<DecimalDetail>,
    pub decimal_32: Option<DecimalDetail>,
    pub decimal_64: Option<DecimalDetail>,
    pub decimal_128: Option<DecimalDetail>,
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
        u8::from_ne_bytes([current_byte]),
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

    Details {
        binary: format!("{:08b}", current_byte),
        ascii_symbol: ascii_symbol(current_byte),
        decimal_8: DecimalDetail {
            be: u8_details.0.to_string(),
            le: u8_details.1.to_string(),
            hex: format!("0x{:02x}", u8_details.0),
        },
        decimal_16: u16_details.map(|x| DecimalDetail {
            be: x.0.to_string(),
            le: x.1.to_string(),
            hex: format!("0x{:04x}", x.0),
        }),
        decimal_32: u32_details.map(|x| DecimalDetail {
            be: x.0.to_string(),
            le: x.1.to_string(),
            hex: format!("0x{:08x}", x.0),
        }),
        decimal_64: u64_details.map(|x| DecimalDetail {
            be: x.0.to_string(),
            le: x.1.to_string(),
            hex: format!("0x{:016x}", x.0),
        }),
        decimal_128: u128_details.map(|x| DecimalDetail {
            be: x.0.to_string(),
            le: x.1.to_string(),
            hex: format!("0x{:032x}", x.0),
        }),
    }
}
