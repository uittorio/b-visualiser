use engine::Details;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Focus {
    FilesList,
    HexView,
    Details,
}

pub struct AppState {
    pub focus: Focus,
    pub should_quit: bool,

    pub byte_details: Option<Details>,
}

impl AppState {
    pub fn new() -> Self {
        Self {
            focus: Focus::FilesList,
            should_quit: false,
            byte_details: None,
        }
    }

    pub fn cycle_focus(&mut self) {
        self.focus = match self.focus {
            Focus::FilesList => Focus::HexView,
            Focus::HexView => Focus::Details,
            Focus::Details => Focus::FilesList,
        };
    }

    pub fn cycle_focus_backwards(&mut self) {
        self.focus = match self.focus {
            Focus::HexView => Focus::FilesList,
            Focus::FilesList => Focus::Details,
            Focus::Details => Focus::HexView,
        };
    }
}
