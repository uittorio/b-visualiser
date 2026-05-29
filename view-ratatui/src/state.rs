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
}

pub struct DetailsPanel {
    pub scroll: usize,
}
