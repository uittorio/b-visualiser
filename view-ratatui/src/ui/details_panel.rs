use crate::state::{AppState, Focus};
use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style},
    text::Span,
    widgets::{Block, Borders},
};

pub fn render(frame: &mut Frame, area: Rect, state: &AppState) {
    let focused = state.focus == Focus::Details;
    let block = Block::new()
        .title(" Byte Details ")
        .borders(Borders::ALL)
        .border_style(border_style(focused));

    let inner = block.inner(area);
    frame.render_widget(block, area);

    let something = Span::raw("content");
    frame.render_widget(something, inner);
}

fn border_style(focused: bool) -> Style {
    if focused {
        Style::new().fg(Color::Cyan)
    } else {
        Style::new().fg(Color::DarkGray)
    }
}
