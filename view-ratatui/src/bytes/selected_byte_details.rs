use engine::Details;

pub struct SelectedByteDetails {
    pub offset: u32,
    pub details: Details,
}

impl SelectedByteDetails {
    pub(crate) fn new(bytes: &[u8], offset: u32) -> Self {
        Self {
            offset,
            details: engine::details(bytes, offset),
        }
    }
}
