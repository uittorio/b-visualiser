use ratatui::{
    Frame,
    layout::{Constraint, Layout, Position, Rect},
    style::{Color, Style},
    text::Span,
    widgets::{Block, Clear},
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

    let block = Block::bordered()
        .title(" Search ")
        .border_style(Style::new().fg(Color::Cyan));
    let inner = block.inner(middle);
    frame.render_widget(block, middle);

    let search_box_size = inner.width as u32;
    let cursor_position = state.search_cursor_position % search_box_size;
    let scroll_amount = state.search_cursor_position / search_box_size;

    frame
        .buffer_mut()
        .cell_mut(Position {
            x: inner.x + cursor_position as u16,
            y: inner.y,
        })
        .map(|c| c.set_bg(Color::White));

    let search_term_to_show = &state.search_term[(scroll_amount * search_box_size) as usize..];
    let content = Span::from(search_term_to_show);
    frame.render_widget(content, inner);

    show_icon_for_more_text_before(frame, inner, scroll_amount);
    show_icon_for_more_text_after(
        frame,
        inner,
        scroll_amount,
        search_box_size,
        &state.search_term,
    );
}

fn show_icon_for_more_text_before(frame: &mut Frame, area: Rect, scroll_amount: u32) {
    if scroll_amount > 0 {
        frame
            .buffer_mut()
            .cell_mut(Position {
                x: area.x - 1,
                y: area.y,
            })
            .map(|c| c.set_char('<'));
    }
}

fn show_icon_for_more_text_after(
    frame: &mut Frame,
    area: Rect,
    scroll_amount: u32,
    search_box_size: u32,
    search_term: &str,
) {
    if ((scroll_amount * search_box_size + search_box_size) as usize) < search_term.len() {
        frame
            .buffer_mut()
            .cell_mut(Position {
                x: area.x + area.width,
                y: area.y,
            })
            .map(|c| c.set_char('>'));
    }
}
