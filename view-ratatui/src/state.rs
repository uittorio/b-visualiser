use engine::Details;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Focus {
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
            focus: Focus::HexView,
            should_quit: false,

            byte_details: Some(Details {
                binary: "00000000".to_string(),
                be_decimal_8: "0".to_string(),
                le_decimal_8: "0".to_string(),
                be_decimal_16: Some("24".to_string()),
                le_decimal_16: Some("6144".to_string()),
                be_decimal_32: Some("1618944".to_string()),
                le_decimal_32: Some("11802624".to_string()),
                be_decimal_64: Some("6953311534440547".to_string()),
                le_decimal_64: Some("7196757702107994112".to_string()),
                be_decimal_128: Some("128265958340597437060646626690566912".to_string()),
                le_decimal_128: Some("724554690776144278698256864325670912".to_string()),
            }),
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
