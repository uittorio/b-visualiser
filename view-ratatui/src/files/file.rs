use std::path::PathBuf;

use engine::FileRow;

pub struct LoadedFile {
    pub path: String,
    pub filename: String,
    pub bytes: Vec<u8>,
    pub offset: u32,
    pub length: u32,
    pub view: Vec<FileRow>,
}

impl LoadedFile {
    pub fn new(path: PathBuf) -> Self {
        let file_bytes = std::fs::read(&path).expect("Expected file to exist");
        let offset = 0;
        let length = 1000;

        Self {
            path: path.to_string_lossy().to_string(),
            filename: path.file_name().unwrap().to_string_lossy().to_string(),
            offset,
            length,
            view: engine::read(&file_bytes, offset, length),
            bytes: file_bytes,
        }
    }
}
