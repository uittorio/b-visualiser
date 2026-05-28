use serde::Serialize;

#[derive(Serialize)]
pub struct FileRow {
    pub bytes: Vec<u8>,
    pub hexadecimal: Vec<String>,
}

pub fn read(file_bytes: &[u8], from_byte: u32, length: u32) -> Vec<FileRow> {
    let mut result: Vec<FileRow> = vec![];

    let end = (from_byte + length).min(file_bytes.len() as u32);
    for bytes in file_bytes[(from_byte as usize)..end as usize].chunks(16) {
        result.push(FileRow {
            bytes: bytes.to_vec(),
            hexadecimal: bytes
                .iter()
                .map(|b| format!("{:02x}", b))
                .collect::<Vec<_>>(),
        });
    }

    result
}

#[derive(Serialize)]
pub struct Details {
    binary: String,
    be_decimal_8: String,
    le_decimal_8: String,
    be_decimal_16: Option<String>,
    le_decimal_16: Option<String>,
    be_decimal_32: Option<String>,
    le_decimal_32: Option<String>,
    be_decimal_64: Option<String>,
    le_decimal_64: Option<String>,
    be_decimal_128: Option<String>,
    le_decimal_128: Option<String>,
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
        be_decimal_8: format!("{}", u8_details.0).to_string(),
        le_decimal_8: format!("{}", u8_details.1).to_string(),
        be_decimal_16: u16_details.map(|x| x.0).map(|x| format!("{}", x)),
        le_decimal_16: u16_details.map(|x| x.1).map(|x| format!("{}", x)),
        be_decimal_32: u32_details.map(|x| x.0).map(|x| format!("{}", x)),
        le_decimal_32: u32_details.map(|x| x.1).map(|x| format!("{}", x)),
        be_decimal_64: u64_details.map(|x| x.0).map(|x| format!("{}", x)),
        le_decimal_64: u64_details.map(|x| x.1).map(|x| format!("{}", x)),
        be_decimal_128: u128_details.map(|x| x.0).map(|x| format!("{}", x)),
        le_decimal_128: u128_details.map(|x| x.1).map(|x| format!("{}", x)),
    }
}
