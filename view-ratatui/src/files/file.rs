use std::path::PathBuf;

use engine::FileRow;

pub struct LoadedFile {
    pub path: String,
    _filename: String,
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
            _filename: path.file_name().unwrap().to_string_lossy().to_string(),
            offset,
            length,
            view: engine::read(&file_bytes, offset, length),
            bytes: file_bytes,
        }
    }

    pub fn set_offset(&mut self, offset: u32) {
        self.offset = offset.min(self.bytes.len() as u32);
        self.update_view();
    }

    pub fn set_length(&mut self, length: u16) {
        self.length = length as u32;
        self.update_view();
    }

    fn update_view(&mut self) {
        self.view = engine::read(&self.bytes, self.offset, self.length);
    }
}
