use crate::{bytes::selected_byte_details::SelectedByteDetails, files::file::LoadedFile};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Focus {
    HexView,
    Details,
}

pub struct AppState {
    pub focus: Focus,
    pub should_quit: bool,

    pub file: Option<LoadedFile>,
    pub selected_byte: Option<SelectedByteDetails>,

    pub details_panel: DetailsPanel,
}

impl AppState {
    pub fn new() -> Self {
        Self {
            focus: Focus::HexView,
            should_quit: false,

            file: None,
            selected_byte: None,

            details_panel: DetailsPanel { scroll: 0 },
        }
    }

    pub fn cycle_focus(&mut self) {
        self.focus = match self.focus {
            Focus::HexView => Focus::Details,
            Focus::Details => Focus::HexView,
        };
    }

    pub fn cycle_focus_backwards(&mut self) {
        self.focus = match self.focus {
            Focus::HexView => Focus::Details,
            Focus::Details => Focus::HexView,
        };
    }
}

pub struct DetailsPanel {
    pub scroll: usize,
}
