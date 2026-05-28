use crate::state::{AppState, Focus};
use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style},
    widgets::{Block, Borders},
};

pub fn render(frame: &mut Frame, area: Rect, state: &AppState) {
    let focused = state.focus == Focus::FilesList;
    frame.render_widget(
        Block::new()
            .title(" Files ")
            .borders(Borders::ALL)
            .border_style(border_style(focused)),
        area,
    );
}

fn border_style(focused: bool) -> Style {
    if focused {
        Style::new().fg(Color::Cyan)
    } else {
        Style::new().fg(Color::DarkGray)
    }
}
