pub mod bottom_bar;
pub mod details_panel;
pub mod hex_panel;
pub mod search_bar;

use crate::{
    mouse::Mouse,
    state::{AppState, Focus},
};
use ratatui::{
    Frame,
    layout::{Constraint, Layout},
};

pub fn draw(frame: &mut Frame, state: &AppState, mouse: &Mouse, ui_sentinel: &mut UiSentinel) {
    let [top, bottom] =
        Layout::vertical([Constraint::Fill(1), Constraint::Length(3)]).areas(frame.area());

    let [hex_area, details_area] = if top.width < 132 {
        Layout::vertical([Constraint::Length(top.width - 20), Constraint::Length(20)]).areas(top)
    } else {
        Layout::horizontal([Constraint::Fill(1), Constraint::Max(45)]).areas(top)
    };

    hex_panel::render(frame, hex_area, state, mouse, ui_sentinel);
    details_panel::render(frame, details_area, state, mouse, ui_sentinel);
    bottom_bar::render(frame, bottom, state, mouse, ui_sentinel);
    search_bar::render(frame, frame.area(), state);
}

#[derive(Default)]
pub struct UiSentinel {
    pub select_byte_offset: Option<u32>,
    pub change_focus: Option<Focus>,
    pub change_hover: Option<Focus>,
    pub hex_panel_height: u16,
    pub details_panel_content_height: u16,
    pub open_file_path: bool,
}
