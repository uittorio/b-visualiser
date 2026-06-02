use crate::{
    mouse::Mouse,
    state::{AppState, Focus},
    ui::UiSentinel,
};
use ratatui::{
    Frame,
    buffer::Buffer,
    layout::{Constraint, Layout, Rect},
    style::{Color, Style, Stylize},
    text::{Line, Span, Text},
    widgets::{Block, Borders, Paragraph, Widget},
};

pub fn render(
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

    let [
        ascii_section,
        u8_section,
        u16_section,
        u32_section,
        u64_section,
        u128_section,
        binary_section,
    ] = Layout::vertical([
        Constraint::Length(3),
        Constraint::Length(4),
        Constraint::Length(4),
        Constraint::Length(4),
        Constraint::Length(4),
        Constraint::Length(4),
        Constraint::Length(2),
    ])
    .areas(buffer.area);

    render_ascii_section(
        &mut buffer,
        ascii_section,
        &selected_byte.details.ascii_symbol,
    );
    render_section(
        &mut buffer,
        u8_section,
        "u8",
        &selected_byte.details.be_decimal_8,
        &selected_byte.details.le_decimal_8,
    );
    if let (Some(be_decimal_16), Some(le_decimal_16)) = (
        &selected_byte.details.be_decimal_16,
        &selected_byte.details.le_decimal_16,
    ) {
        render_section(
            &mut buffer,
            u16_section,
            "u16",
            &be_decimal_16,
            &le_decimal_16,
        );
    }
    if let (Some(be_decimal_32), Some(le_decimal_32)) = (
        &selected_byte.details.be_decimal_32,
        &selected_byte.details.le_decimal_32,
    ) {
        render_section(
            &mut buffer,
            u32_section,
            "u32",
            &be_decimal_32,
            &le_decimal_32,
        );
    }
    if let (Some(be_decimal_64), Some(le_decimal_64)) = (
        &selected_byte.details.be_decimal_64,
        &selected_byte.details.le_decimal_64,
    ) {
        render_section(
            &mut buffer,
            u64_section,
            "u64",
            &be_decimal_64,
            &le_decimal_64,
        );
    }
    if let (Some(be_decimal_128), Some(le_decimal_128)) = (
        &selected_byte.details.be_decimal_128,
        &selected_byte.details.le_decimal_128,
    ) {
        render_section(
            &mut buffer,
            u128_section,
            "u128",
            &be_decimal_128,
            &le_decimal_128,
        );
    }
    render_binary_section(&mut buffer, binary_section, &selected_byte.details.binary);

    buffer
        .content
        .drain(..buffer.area().width as usize * state.details_panel.scroll);
    buffer.resize(inner);
    frame.buffer_mut().merge(&buffer);

    ui_sentinel.details_panel_content_height = binary_section.y;
}

fn render_ascii_section(buffer: &mut Buffer, area: Rect, ascii: &str) {
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
}

fn render_section(buffer: &mut Buffer, area: Rect, title: &str, be: &str, le: &str) {
    let [title_area, bytes_area, divider_area] = Layout::vertical([
        Constraint::Length(1),
        Constraint::Length(2),
        Constraint::Length(1),
    ])
    .areas(area);

    Text::from(title).bold().render(title_area, buffer);

    let [left, right] =
        Layout::horizontal([Constraint::Length(2), Constraint::Fill(1)]).areas(bytes_area);

    Paragraph::new(vec![Line::from("BE").italic(), Line::from("LE").italic()]).render(left, buffer);
    Paragraph::new(vec![
        Line::from(be).right_aligned(),
        Line::from(le).right_aligned(),
    ])
    .render(right, buffer);
    ratatui::symbols::line::HORIZONTAL
        .repeat(divider_area.width as usize)
        .render(divider_area, buffer);
}

fn render_binary_section(buffer: &mut Buffer, area: Rect, binary: &str) {
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
}

fn border_style(focused: bool) -> Style {
    if focused {
        Style::new().fg(Color::Cyan)
    } else {
        Style::new().fg(Color::DarkGray)
    }
}
