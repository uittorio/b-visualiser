pub mod details_panel;
pub mod files_panel;
pub mod hex_panel;

use crate::state::AppState;
use ratatui::{
    Frame,
    layout::{Constraint, Layout},
};

pub fn draw(frame: &mut Frame, state: &AppState) {
    let [left, center, right] = Layout::horizontal([
        Constraint::Percentage(20),
        Constraint::Percentage(58),
        Constraint::Percentage(22),
    ])
    .areas(frame.area());

    files_panel::render(frame, left, state);
    hex_panel::render(frame, center, state);
    details_panel::render(frame, right, state);
}
