use crate::state::{AppState, Focus};
use ratatui::{
    Frame,
    layout::{Constraint, Flex, Layout, Rect},
    style::{Color, Style, Stylize},
    text::{Line, Span, Text},
    widgets::{Block, Borders, Paragraph},
};

pub fn render(frame: &mut Frame, area: Rect, state: &AppState) {
    let focused = state.focus == Focus::Details;

    let block = Block::new()
        .title(" Byte Details ")
        .borders(Borders::ALL)
        .border_style(border_style(focused));

    let inner = block.inner(area);
    frame.render_widget(block, area);

    let Some(details) = &state.byte_details else {
        return;
    };

    let [
        u8_section,
        u16_section,
        u32_section,
        u64_section,
        u128_section,
        binary_section,
    ] = Layout::vertical([
        Constraint::Length(4),
        Constraint::Length(4),
        Constraint::Length(4),
        Constraint::Length(4),
        Constraint::Length(4),
        Constraint::Fill(1),
    ])
    .areas(inner);

    render_section(
        frame,
        u8_section,
        "u8",
        &details.be_decimal_8,
        &details.le_decimal_8,
    );
    if let (Some(be_decimal_16), Some(le_decimal_16)) =
        (&details.be_decimal_16, &details.le_decimal_16)
    {
        render_section(frame, u16_section, "u16", &be_decimal_16, &le_decimal_16);
    }
    if let (Some(be_decimal_32), Some(le_decimal_32)) =
        (&details.be_decimal_32, &details.le_decimal_32)
    {
        render_section(frame, u32_section, "u32", &be_decimal_32, &le_decimal_32);
    }
    if let (Some(be_decimal_64), Some(le_decimal_64)) =
        (&details.be_decimal_64, &details.le_decimal_64)
    {
        render_section(frame, u64_section, "u64", &be_decimal_64, &le_decimal_64);
    }
    if let (Some(be_decimal_128), Some(le_decimal_128)) =
        (&details.be_decimal_128, &details.le_decimal_128)
    {
        render_section(
            frame,
            u128_section,
            "u128",
            &be_decimal_128,
            &le_decimal_128,
        );
    }
    render_binary_section(frame, binary_section, &details.binary);
}

fn render_section(frame: &mut Frame, area: Rect, title: &str, be: &str, le: &str) {
    let [title_area, bytes_area, divider_area] = Layout::vertical([
        Constraint::Length(1),
        Constraint::Length(2),
        Constraint::Length(1),
    ])
    .areas(area);

    frame.render_widget(Text::from(title).bold(), title_area);

    let [left, right] = Layout::horizontal([Constraint::Length(2), Constraint::Fill(1)])
        .flex(Flex::SpaceBetween)
        .areas(bytes_area);
    frame.render_widget(
        Paragraph::new(vec![Line::from("BE").italic(), Line::from("LE").italic()]),
        left,
    );
    frame.render_widget(
        Paragraph::new(vec![
            Line::from(be).right_aligned(),
            Line::from(le).right_aligned(),
        ]),
        right,
    );
    frame.render_widget(
        ratatui::symbols::line::HORIZONTAL.repeat(divider_area.width as usize),
        divider_area,
    );
}

fn render_binary_section(frame: &mut Frame, area: Rect, binary: &str) {
    frame.render_widget(
        Paragraph::new(vec![
            Line::from("Binary").bold(),
            Line::from(
                binary
                    .chars()
                    .into_iter()
                    .flat_map(|c| vec![Span::from(c.to_string()), Span::from(" ")])
                    .collect::<Vec<Span>>(),
            ),
        ]),
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
