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
