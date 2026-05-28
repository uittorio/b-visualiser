pub mod details_panel;
pub mod hex_panel;

use crate::{mouse_action_sentinel::MouseActionSentinel, state::AppState};
use ratatui::{
    Frame,
    layout::{Constraint, Layout},
};

pub fn draw(frame: &mut Frame, state: &AppState, action_sentinel: &mut MouseActionSentinel) {
    let [left, right] =
        Layout::horizontal([Constraint::Fill(1), Constraint::Max(45)]).areas(frame.area());

    hex_panel::render(frame, left, state, action_sentinel);
    details_panel::render(frame, right, state);
}
