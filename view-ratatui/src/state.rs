use crate::{bytes::selected_byte_details::SelectedByteDetails, files::file::LoadedFile};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Focus {
    HexView,
    Details,
    Search,
}

pub struct AppState {
    pub focus: Focus,
    pub hover: Focus,
    pub should_quit: bool,

    pub file: Option<LoadedFile>,
    pub selected_byte: Option<SelectedByteDetails>,

    pub details_panel: DetailsPanel,
    pub search_term: String,
    pub search_cursor_position: u32,
}

impl AppState {
    pub fn new() -> Self {
        Self {
            focus: Focus::HexView,
            hover: Focus::HexView,
            should_quit: false,

            file: None,
            selected_byte: None,

            details_panel: DetailsPanel { scroll: 0 },
            search_term: String::new(),
            search_cursor_position: 0,
        }
    }

    pub fn cycle_focus(&mut self) {
        self.focus = match self.focus {
            Focus::HexView => Focus::Details,
            Focus::Details => Focus::HexView,
            _ => self.focus,
        };
    }

    pub fn cycle_focus_backwards(&mut self) {
        self.focus = match self.focus {
            Focus::HexView => Focus::Details,
            Focus::Details => Focus::HexView,
            _ => self.focus,
        };
    }

    pub fn select_byte(&mut self, offset: u32) {
        let Some(file) = self.file.as_mut() else {
            return;
        };

        self.selected_byte = Some(SelectedByteDetails::new(&file.bytes, offset));
        if offset >= file.offset + file.length {
            file.set_offset((offset + 1).div_ceil(16) * 16 - (file.view.len() as u32) * 16);
        } else if offset < file.offset {
            file.set_offset((offset / 16) * 16);
        }
    }
}

pub struct DetailsPanel {
    pub scroll: usize,
}
