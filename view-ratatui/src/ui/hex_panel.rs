use crate::{
    bytes::selected_byte_details::SelectedByteDetails,
    files::file::LoadedFile,
    mouse::{Mouse, MouseEventKind},
    state::{AppState, Focus},
    ui::UiSentinel,
};
use ratatui::{
    Frame,
    layout::{Constraint, Layout, Rect},
    style::{Color, Style},
    text::{Line, Span},
    widgets::{Block, Borders, Paragraph, Scrollbar, ScrollbarOrientation, ScrollbarState},
};

pub fn render(
    compact_mode: bool,
    frame: &mut Frame,
    area: Rect,
    state: &AppState,
    mouse: &Mouse,
    ui_sentinel: &mut UiSentinel,
) {
    if area.contains(*mouse.position()) {
        ui_sentinel.change_hover = Some(Focus::HexView);
    }

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

    let scrollbar = Scrollbar::new(ScrollbarOrientation::VerticalRight)
        .begin_symbol(Some("↑"))
        .end_symbol(Some("↓"));

    let mut scrollbar_state = ScrollbarState::new(file.bytes.len()).position(file.offset as usize);

    frame.render_stateful_widget(scrollbar, area, &mut scrollbar_state);

    let [hex_area, _, ascii_area] = Layout::horizontal([
        Constraint::Length(hex_area_size(compact_mode)),
        Constraint::Length(if compact_mode { 1 } else { 6 }),
        Constraint::Length(ascii_area_size(compact_mode)),
    ])
    .areas(inner);

    render_grid(
        compact_mode,
        frame,
        hex_area,
        file.view.iter().map(|v| &v.hexadecimal),
        2,
        &file,
        &state.selected_byte,
        focused,
        mouse,
        ui_sentinel,
    );

    render_grid(
        compact_mode,
        frame,
        ascii_area,
        file.view.iter().map(|v| &v.ascii),
        1,
        &file,
        &state.selected_byte,
        focused,
        mouse,
        ui_sentinel,
    );
}

fn hex_area_size(compact_mode: bool) -> u16 {
    if compact_mode { 32 } else { 47 }
}

fn ascii_area_size(compact_mode: bool) -> u16 {
    if compact_mode { 16 } else { 31 }
}

fn render_grid<'a, T: Iterator<Item = &'a Vec<String>>>(
    compact_mode: bool,
    frame: &mut Frame,
    area: Rect,
    lines: T,
    cell_size: usize,
    file: &LoadedFile,
    selected_byte: &Option<SelectedByteDetails>,
    focused: bool,
    mouse: &Mouse,
    ui_sentinel: &mut UiSentinel,
) {
    let selected_style = if focused {
        Style::new().on_light_blue()
    } else {
        Style::new().on_dark_gray()
    };

    let hex_bytes = Paragraph::new(
        lines
            .enumerate()
            .take(area.height as usize)
            .map(|(y, r)| {
                Line::from(
                    r.iter()
                        .enumerate()
                        .flat_map(|(x, h)| {
                            let mut byte_span = if let Some(selected_byte) = selected_byte
                                && selected_byte.offset as usize
                                    == y * 16 + x + file.offset as usize
                            {
                                Span::from(h).style(selected_style)
                            } else {
                                Span::from(h)
                            };
                            if compact_mode {
                                if x % 2 == 0 {
                                    byte_span.style = byte_span.style.bold();
                                }
                                vec![byte_span]
                            } else {
                                vec![byte_span, Span::from(" ")]
                            }
                        })
                        .collect::<Vec<_>>(),
                )
            })
            .collect::<Vec<_>>(),
    );

    listen_mouse(compact_mode, cell_size, file, &area, mouse, ui_sentinel);
    frame.render_widget(hex_bytes, area);

    ui_sentinel.hex_panel_height = area.height;
}

fn listen_mouse(
    compact_mode: bool,
    cell_size: usize,
    file: &LoadedFile,
    area: &Rect,
    mouse: &Mouse,
    ui_sentinel: &mut UiSentinel,
) {
    let Some(MouseEventKind::Click) = mouse.event_kind() else {
        return;
    };

    let pos = mouse.position();
    let space_between_cells = if compact_mode { 0 } else { 1 };

    // Outside the area
    if pos.x < area.x
        || pos.x > area.x + area.width - 1
        || pos.y < area.y
        || pos.y > area.y + area.height - 1
    {
        return;
    }

    let adjusted_x = pos.x - area.x;
    let adjusted_y = pos.y - area.y;

    // On the space between bytes
    if !compact_mode && (adjusted_x + 1) % (cell_size as u16 + 1) == 0 {
        return;
    }

    let x = (adjusted_x + space_between_cells) / (cell_size as u16 + space_between_cells);
    let y = adjusted_y;

    // Click on right side of hex grid
    if x > 15 {
        return;
    }

    // Click after hex grid ends
    if y * 16 + x >= (file.bytes.len() as u32 - file.offset) as u16 {
        return;
    }

    ui_sentinel.select_byte_offset = Some(y as u32 * 16 + x as u32 + file.offset);
}

fn border_style(focused: bool) -> Style {
    if focused {
        Style::new().fg(Color::Cyan)
    } else {
        Style::new().fg(Color::DarkGray)
    }
}
