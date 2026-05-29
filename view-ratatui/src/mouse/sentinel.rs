use crate::state::Focus;

#[derive(Default)]
pub struct MouseActionSentinel {
    pub select_byte_offset: Option<u32>,
    pub change_focus: Option<Focus>,
}
