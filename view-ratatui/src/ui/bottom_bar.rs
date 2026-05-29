use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style, Stylize},
    text::Line,
    widgets::{Block, Borders},
};

use crate::{mouse::Mouse, state::AppState};

pub fn render(frame: &mut Frame, area: Rect, state: &AppState, mouse: &Mouse) {
    let block = Block::new()
        .title(" File ")
        .borders(Borders::ALL)
        .border_style(Style::new().fg(Color::DarkGray));

    let inner = block.inner(area);
    frame.render_widget(block, area);

    let line = if let Some(file) = &state.file {
        Line::from(format!(
            "{} · Offset {} · Length {} · {}",
            file.path,
            file.offset,
            file.length,
            mouse_text(mouse)
        ))
    } else {
        Line::from(format!("Select a file... · {}", mouse_text(mouse))).italic()
    };
    frame.render_widget(line, inner);
}

fn mouse_text(mouse: &Mouse) -> String {
    format!(
        "Mouse ({}, {}) [{:?}]",
        mouse.position().x,
        mouse.position().y,
        mouse.last_event()
    )
}
