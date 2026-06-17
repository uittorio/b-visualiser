use crate::{
    mouse::Mouse,
    state::{AppState, Focus},
    ui::UiSentinel,
};
use engine::{DecimalDetail, Utf8Detail};
use ratatui::{
    Frame,
    buffer::Buffer,
    layout::{Constraint, Layout, Rect},
    style::{Color, Style, Stylize},
    text::{Line, Span},
    widgets::{Block, Borders, Paragraph, Widget},
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
        ui_sentinel.change_hover = Some(Focus::Details);
    }

    let focused = state.focus == Focus::Details;

    let block = Block::new()
        .title(" Byte Details ")
        .borders(Borders::ALL)
        .border_style(border_style(focused));

    let inner = block.inner(area);
    let mut buffer = Buffer::empty(Rect {
        x: inner.x,
        y: inner.y,
        width: inner.width,
        height: 500, // Enough to print everything to allow scrolling
    });

    frame.render_widget(block, area);

    let Some(selected_byte) = &state.selected_byte else {
        return;
    };

    let details = &selected_byte.details;

    let mut area = buffer.area;

    let used = render_ascii_section(&mut buffer, area, &details.ascii_symbol);
    area = go_next(area, used);

    let used = render_utf8_section(&mut buffer, area, &details.utf8);
    area = go_next(area, used);

    let used = render_section(&mut buffer, area, "u8", &details.decimal_8);
    area = go_next(area, used);

    if let Some(info) = &details.decimal_16 {
        let used = render_section(&mut buffer, area, "u16", info);
        area = go_next(area, used);
    }
    if let Some(info) = &details.decimal_32 {
        let used = render_section(&mut buffer, area, "u32", info);
        area = go_next(area, used);
    }
    if let Some(info) = &details.decimal_64 {
        let used = render_section(&mut buffer, area, "u64", info);
        area = go_next(area, used);
    }
    if !compact_mode && let Some(info) = &details.decimal_128 {
        let used = render_section(&mut buffer, area, "u128", info);
        area = go_next(area, used);
    }
    render_binary_section(&mut buffer, area, &selected_byte.details.binary);

    let bottom_y = area.y;

    buffer
        .content
        .drain(..buffer.area().width as usize * state.details_panel.scroll.min(bottom_y as usize));
    buffer.resize(inner);
    frame.buffer_mut().merge(&buffer);

    ui_sentinel.details_panel_content_height = bottom_y;
}

fn render_ascii_section(buffer: &mut Buffer, area: Rect, ascii: &str) -> LinesRendered {
    let [top_area, divider_area] =
        Layout::vertical([Constraint::Length(2), Constraint::Length(1)]).areas(area);
    let [left, right] =
        Layout::horizontal([Constraint::Length(6), Constraint::Fill(1)]).areas(top_area);
    Paragraph::new(vec![
        Line::from("ASCII").bold(),
        Line::from("Symbol").italic(),
    ])
    .render(left, buffer);
    Paragraph::new(vec![Line::from(""), Line::from(ascii).right_aligned()]).render(right, buffer);

    ratatui::symbols::line::HORIZONTAL
        .repeat(divider_area.width as usize)
        .render(divider_area, buffer);

    LinesRendered(3)
}

fn render_utf8_section(
    buffer: &mut Buffer,
    area: Rect,
    utf8: &Option<Utf8Detail>,
) -> LinesRendered {
    let [top_area, divider_area] =
        Layout::vertical([Constraint::Length(2), Constraint::Length(1)]).areas(area);
    let [left, right] =
        Layout::horizontal([Constraint::Fill(1), Constraint::Length(2)]).areas(top_area);
    if let Some(utf8) = utf8 {
        Paragraph::new(vec![
            Line::from(vec![
                Span::from("UTF8").bold(),
                Span::from(format!(" ({})", utf8.hex)),
            ]),
            Line::from("Symbol").italic(),
        ])
        .render(left, buffer);
        Paragraph::new(vec![
            Line::from(""),
            Line::from(utf8.value.as_str()).right_aligned(),
        ])
        .render(right, buffer);
    } else {
        Paragraph::new(vec![
            Line::from("UTF8").bold(),
            Line::from("Symbol").italic(),
        ])
        .render(left, buffer);
    }

    ratatui::symbols::line::HORIZONTAL
        .repeat(divider_area.width as usize)
        .render(divider_area, buffer);

    LinesRendered(3)
}

fn render_section(
    buffer: &mut Buffer,
    area: Rect,
    title: &str,
    detail: &DecimalDetail,
) -> LinesRendered {
    let [title_area, bytes_area, divider_area] = Layout::vertical([
        Constraint::Length(1),
        Constraint::Length(2),
        Constraint::Length(1),
    ])
    .areas(area);

    Line::from(vec![
        Span::from(title).bold(),
        Span::from(format!(" ({})", detail.hex)),
    ])
    .render(title_area, buffer);

    let [left, right] =
        Layout::horizontal([Constraint::Length(2), Constraint::Fill(1)]).areas(bytes_area);

    Paragraph::new(vec![Line::from("BE").italic(), Line::from("LE").italic()]).render(left, buffer);
    Paragraph::new(vec![
        Line::from(detail.be.as_str()).right_aligned(),
        Line::from(detail.le.as_str()).right_aligned(),
    ])
    .render(right, buffer);
    ratatui::symbols::line::HORIZONTAL
        .repeat(divider_area.width as usize)
        .render(divider_area, buffer);

    LinesRendered(4)
}

fn render_binary_section(buffer: &mut Buffer, area: Rect, binary: &str) -> LinesRendered {
    Paragraph::new(vec![
        Line::from("Binary").bold(),
        Line::from(
            binary
                .chars()
                .into_iter()
                .map(|c| {
                    if c == '1' {
                        Span::from(format!("{} ", c.to_string())).bold()
                    } else {
                        Span::from(format!("{} ", c.to_string()))
                    }
                })
                .collect::<Vec<Span>>(),
        ),
    ])
    .render(area, buffer);

    LinesRendered(2)
}

fn border_style(focused: bool) -> Style {
    if focused {
        Style::new().fg(Color::Cyan)
    } else {
        Style::new().fg(Color::DarkGray)
    }
}

fn go_next(area: Rect, used: LinesRendered) -> Rect {
    Rect {
        x: area.x,
        width: area.width,
        height: area.height,
        y: area.y + used.0,
    }
}

struct LinesRendered(u16);
