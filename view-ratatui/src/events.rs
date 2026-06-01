use std::{
    path::{Path, PathBuf},
    process::Command,
};

use crate::{
    bytes::selected_byte_details::SelectedByteDetails,
    state::{AppState, Focus},
    ui::UiSentinel,
};
use crossterm::event::{KeyCode, KeyEvent, KeyModifiers, MouseEvent, MouseEventKind};

pub fn handle_key(key: KeyEvent, state: &mut AppState) {
    match key.code {
        KeyCode::Char('q') => state.should_quit = true,
        KeyCode::Char('c') if key.modifiers.contains(KeyModifiers::CONTROL) => {
            state.should_quit = true
        }
        KeyCode::BackTab => state.cycle_focus_backwards(),
        KeyCode::Tab => state.cycle_focus(),
        KeyCode::Char('/') if state.focus != Focus::Search => state.focus = Focus::Search,
        _ => match state.focus {
            Focus::HexView => handle_key_in_hex_panel(key, state),
            Focus::Details => {}
            Focus::Search => handle_key_in_search(key, state),
        },
    }
}

pub fn handle_key_in_hex_panel(key: KeyEvent, state: &mut AppState) {
    match key.code {
        KeyCode::Left => {
            update_selected_byte(state, |offset| offset.saturating_sub(1));
        }
        KeyCode::Right => {
            update_selected_byte(state, |offset| offset.saturating_add(1));
        }
        KeyCode::Up => {
            update_selected_byte(state, |offset| offset.saturating_sub(16));
        }
        KeyCode::Down => {
            update_selected_byte(state, |offset| offset.saturating_add(16));
        }
        _ => {}
    }
}

pub fn handle_key_in_search(key: KeyEvent, state: &mut AppState) {
    match key.code {
        KeyCode::Esc => state.focus = Focus::HexView,
        KeyCode::Enter => {
            if let Some(file) = &state.file {
                let search_term_bytes = state.search_term.as_bytes();
                if let Some(pos) = file
                    .bytes
                    .windows(search_term_bytes.len())
                    .position(|w| w == search_term_bytes)
                {
                    state.select_byte(pos as u32);
                }
            }
            state.focus = Focus::HexView;
        }
        KeyCode::Char(c) => {
            let (prev, after) = state
                .search_term
                .split_at(state.search_cursor_position as usize);
            state.search_term = format!("{}{}{}", prev, c, after);
            state.search_cursor_position =
                (state.search_cursor_position + 1).min(state.search_term.len() as u32);
        }
        KeyCode::Right => {
            state.search_cursor_position =
                (state.search_cursor_position + 1).min(state.search_term.len() as u32);
        }
        KeyCode::Left => {
            state.search_cursor_position = state.search_cursor_position.saturating_sub(1);
        }
        KeyCode::Home => {
            state.search_cursor_position = 0;
        }
        KeyCode::End => {
            state.search_cursor_position = state.search_term.len() as u32;
        }
        KeyCode::Backspace => {
            if state.search_cursor_position == 0 {
                return;
            }
            if key.modifiers.contains(KeyModifiers::CONTROL) {
                let (_, new_term) = state
                    .search_term
                    .split_at(state.search_cursor_position as usize);
                state.search_term = new_term.to_string();
                state.search_cursor_position = 0;
            } else {
                state.search_cursor_position = state.search_cursor_position.saturating_sub(1);
                state
                    .search_term
                    .remove(state.search_cursor_position as usize);
            }
        }
        KeyCode::Delete => {
            if state.search_cursor_position == state.search_term.len() as u32 {
                return;
            }
            if key.modifiers == KeyModifiers::CONTROL {
                let (new_term, _) = state
                    .search_term
                    .split_at(state.search_cursor_position as usize);
                state.search_term = new_term.to_string();
            } else {
                state
                    .search_term
                    .remove(state.search_cursor_position as usize);
            }
        }
        _ => {}
    }
}

pub fn handle_ui_sentinel(state: &mut AppState, ui_sentinel: &mut UiSentinel) {
    if let (Some(selected_byte), Some(file)) = (ui_sentinel.select_byte_offset.take(), &state.file)
        && state.focus == Focus::HexView
    {
        state.selected_byte = Some(SelectedByteDetails::new(&file.bytes, selected_byte));
    }

    if let Some(focus) = ui_sentinel.change_focus.take()
        && state.focus != Focus::Search
    {
        state.focus = focus;
    }

    if let Some(hover) = ui_sentinel.change_hover.take() {
        state.hover = hover;
    }

    if let Some(file) = state.file.as_mut() {
        file.set_length(ui_sentinel.hex_panel_height * 16);
    }

    if ui_sentinel.open_file_path
        && let Some(file) = &state.file
    {
        ui_sentinel.open_file_path = false;
        Command::new("open")
            .arg(
                PathBuf::from(&file.path)
                    .parent()
                    .unwrap_or_else(|| Path::new(".")),
            )
            .spawn()
            .unwrap();
    }
}

pub fn handle_mouse(mouse_event: MouseEvent, state: &mut AppState, ui_sentinel: &UiSentinel) {
    match mouse_event.kind {
        MouseEventKind::ScrollDown => match state.hover {
            Focus::HexView => {
                if let Some(file) = state.file.as_mut() {
                    file.set_offset(file.offset + 16);
                }
            }
            Focus::Details => {
                state.details_panel.scroll = (state.details_panel.scroll + 1)
                    .min(ui_sentinel.details_panel_content_height as usize)
            }
            Focus::Search => {}
        },
        MouseEventKind::ScrollUp => match state.hover {
            Focus::HexView => {
                if let Some(file) = state.file.as_mut() {
                    file.set_offset(file.offset.saturating_sub(16));
                }
            }
            Focus::Details => {
                state.details_panel.scroll = state.details_panel.scroll.saturating_sub(1)
            }
            Focus::Search => {}
        },
        _ => {}
    }
}

fn update_selected_byte<F: FnOnce(u32) -> u32>(state: &mut AppState, update_offset: F) {
    let target_offset = if let Some(selected_byte) = state.selected_byte.as_mut() {
        update_offset(selected_byte.offset)
    } else {
        0
    };
    state.select_byte(target_offset);
}
