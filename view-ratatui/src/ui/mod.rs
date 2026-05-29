pub mod bottom_bar;
pub mod details_panel;
pub mod hex_panel;

use crate::{mouse::Mouse, mouse::sentinel::MouseActionSentinel, state::AppState};
use ratatui::{
    Frame,
    layout::{Constraint, Layout},
};

pub fn draw(
    frame: &mut Frame,
    state: &AppState,
    mouse: &Mouse,
    action_sentinel: &mut MouseActionSentinel,
) {
    let [top, bottom] =
        Layout::vertical([Constraint::Fill(1), Constraint::Length(3)]).areas(frame.area());

    let [left, right] = Layout::horizontal([Constraint::Fill(1), Constraint::Max(45)]).areas(top);

    hex_panel::render(frame, left, state, action_sentinel);
    details_panel::render(frame, right, state);
    bottom_bar::render(frame, bottom, state, mouse);
}
