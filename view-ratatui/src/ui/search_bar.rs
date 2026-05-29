use ratatui::{
    Frame,
    layout::{Constraint, Layout, Rect},
    style::{Color, Style},
    widgets::{Block, Clear, Paragraph},
};

use crate::state::{AppState, Focus};

pub fn render(frame: &mut Frame, area: Rect, state: &AppState) {
    if state.focus != Focus::Search {
        return;
    }

    let [_, middle, _] = Layout::horizontal([
        Constraint::Fill(1),
        Constraint::Length(20),
        Constraint::Fill(1),
    ])
    .areas(area);

    let [_, middle, _] = Layout::vertical([
        Constraint::Fill(1),
        Constraint::Length(3),
        Constraint::Fill(1),
    ])
    .areas(middle);

    frame.render_widget(Clear, middle);

    let content = Paragraph::new(state.search_term.as_str()).block(
        Block::bordered()
            .title(" Search ")
            .border_style(Style::new().fg(Color::Cyan)),
    );

    frame.render_widget(content, middle);
}
