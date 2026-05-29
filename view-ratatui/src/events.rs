use crate::{bytes::selected_byte_details::SelectedByteDetails, state::AppState, ui::UiSentinel};
use crossterm::event::{KeyCode, KeyEvent, KeyModifiers, MouseEvent, MouseEventKind};

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

pub fn handle_ui_sentinel(state: &mut AppState, ui_sentinel: &mut UiSentinel) {
    if let (Some(selected_byte), Some(file)) = (ui_sentinel.select_byte_offset.take(), &state.file)
    {
        state.selected_byte = Some(SelectedByteDetails::new(&file.bytes, selected_byte));
    }

    if let Some(focus) = ui_sentinel.change_focus.take() {
        state.focus = focus;
    }

    if let Some(file) = state.file.as_mut() {
        file.set_length(ui_sentinel.hex_panel_height * 16);
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

pub fn handle_mouse(mouse_event: MouseEvent, state: &mut AppState, ui_sentinel: &UiSentinel) {
    match mouse_event.kind {
        MouseEventKind::ScrollDown => match state.focus {
            crate::state::Focus::HexView => {
                if let Some(file) = state.file.as_mut() {
                    file.set_offset(file.offset + 16);
                }
            }
            crate::state::Focus::Details => {
                state.details_panel.scroll = (state.details_panel.scroll + 1)
                    .min(ui_sentinel.details_panel_content_height as usize)
            }
        },
        MouseEventKind::ScrollUp => match state.focus {
            crate::state::Focus::HexView => {
                if let Some(file) = state.file.as_mut() {
                    file.set_offset(file.offset.saturating_sub(16));
                }
            }
            crate::state::Focus::Details => {
                state.details_panel.scroll = state.details_panel.scroll.saturating_sub(1)
            }
        },
        _ => {}
    }
}
