use crate::{
    bytes::selected_byte_details::SelectedByteDetails,
    files::file::LoadedFile,
    mouse_action_sentinel::MouseActionSentinel,
    state::{AppState, Focus},
};
use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style},
    text::{Line, Span},
    widgets::{Block, Borders, Paragraph},
};

pub fn render(
    frame: &mut Frame,
    area: Rect,
    state: &AppState,
    _action_sentinel: &mut MouseActionSentinel,
) {
    let focused = state.focus == Focus::HexView;
    let block = Block::new()
        .title(" Hex View ")
        .borders(Borders::ALL)
        .border_style(border_style(focused));

    let inner = block.inner(area);
    frame.render_widget(block, area);

    let Some(file) = &state.file else {
        return;
    };

    render_hex(frame, inner, file, &state.selected_byte);
}

fn render_hex(
    frame: &mut Frame,
    area: Rect,
    file: &LoadedFile,
    selected_byte: &Option<SelectedByteDetails>,
) {
    let hex_bytes = Paragraph::new(
        file.view
            .iter()
            .enumerate()
            .take(area.height as usize)
            .map(|(y, r)| {
                Line::from(
                    r.hexadecimal
                        .iter()
                        .enumerate()
                        .flat_map(|(x, h)| {
                            vec![
                                if let Some(selected_byte) = selected_byte
                                    && selected_byte.offset as usize == y * 16 + x
                                {
                                    Span::from(h).style(Style::new().on_light_blue())
                                } else {
                                    Span::from(h)
                                },
                                Span::from(" "),
                            ]
                        })
                        .collect::<Vec<_>>(),
                )
            })
            .collect::<Vec<_>>(),
    );

    frame.render_widget(hex_bytes, area);
}

fn border_style(focused: bool) -> Style {
    if focused {
        Style::new().fg(Color::Cyan)
    } else {
        Style::new().fg(Color::DarkGray)
    }
}
