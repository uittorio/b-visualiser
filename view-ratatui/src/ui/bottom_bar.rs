use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style, Stylize},
    text::{Line, Span},
    widgets::{Block, Borders},
};

use crate::{
    files::file::LoadedFile,
    mouse::{Mouse, MouseEventKind},
    state::AppState,
    ui::UiSentinel,
};

pub fn render(
    compact_mode: bool,
    frame: &mut Frame,
    area: Rect,
    state: &AppState,
    mouse: &Mouse,
    ui_sentinel: &mut UiSentinel,
) {
    let block = Block::new()
        .title(" File ")
        .borders(Borders::ALL)
        .border_style(Style::new().fg(Color::DarkGray));

    let inner = block.inner(area);
    frame.render_widget(block, area);

    if let Some(file) = &state.file {
        let next_area = render_file_path(compact_mode, frame, inner, file, mouse, ui_sentinel);
        let line = Line::from(format!(
            " · View ({}, {}) · Selected {} · {}",
            file.offset,
            file.length,
            state.selected_byte.as_ref().map(|s| s.offset).unwrap_or(0),
            mouse_text(mouse)
        ));
        frame.render_widget(line, next_area);
    } else {
        frame.render_widget(
            Line::from(format!("Select a file... · {}", mouse_text(mouse))).italic(),
            inner,
        );
    };
}

fn render_file_path(
    compact_mode: bool,
    frame: &mut Frame,
    area: Rect,
    file: &LoadedFile,
    mouse: &Mouse,
    ui_sentinel: &mut UiSentinel,
) -> Rect {
    let path = if compact_mode {
        &file.filename
    } else {
        &file.path
    };

    frame.render_widget(Span::raw(path), area);

    let path_len = path.len() as u16;

    if let Some(MouseEventKind::DoubleClick) = mouse.event_kind() {
        let area = Rect {
            x: area.x,
            y: area.y,
            height: 1,
            width: path_len,
        };
        ui_sentinel.open_file_path = area.contains(*mouse.position());
    }

    Rect {
        x: area.x + path_len,
        y: area.y,
        height: area.height,
        width: area.width - path_len,
    }
}

fn mouse_text(mouse: &Mouse) -> String {
    format!(
        "Mouse ({}, {}) [{:?}]",
        mouse.position().x,
        mouse.position().y,
        mouse.last_event()
    )
}
