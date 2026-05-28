use crate::{bytes::selected_byte_details::SelectedByteDetails, state::AppState};
use crossterm::event::{KeyCode, KeyEvent, KeyModifiers};

pub fn handle_key(key: KeyEvent, state: &mut AppState) {
    match key.code {
        KeyCode::Char('q') => state.should_quit = true,
        KeyCode::Char('c') if key.modifiers.contains(KeyModifiers::CONTROL) => {
            state.should_quit = true
        }
        KeyCode::BackTab => state.cycle_focus_backwards(),
        KeyCode::Tab => state.cycle_focus(),
        _ => {}
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

fn update_selected_byte<F: FnOnce(u32) -> u32>(state: &mut AppState, update_offset: F) {
    let Some(file) = &state.file else {
        return;
    };
    let target_offset = if let Some(selected_byte) = state.selected_byte.as_mut() {
        update_offset(selected_byte.offset)
    } else {
        0
    };
    state.selected_byte = Some(SelectedByteDetails::new(&file.bytes, target_offset));
}
