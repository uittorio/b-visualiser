use crate::{
    bytes::selected_byte_details::SelectedByteDetails,
    events,
    files::file::LoadedFile,
    mouse::sentinel::MouseActionSentinel,
    mouse::{Mouse, Position},
    state::AppState,
    ui,
};
use anyhow::Result;
use crossterm::event::{Event, KeyEventKind, MouseButton, MouseEventKind};
use ratatui::DefaultTerminal;
use std::{path::PathBuf, time::Duration};

pub struct App {
    pub state: AppState,
}

impl App {
    pub fn new() -> Self {
        let path = PathBuf::from("/media/pmyl/Tardis/Projects/font-rasterizer/Verdana.ttf");

        let mut state = AppState::new();
        let loaded_file = LoadedFile::new(path);
        state.selected_byte = Some(SelectedByteDetails::new(&loaded_file.bytes, 0));
        state.file = Some(loaded_file);

        Self { state }
    }

    pub fn run(&mut self, terminal: &mut DefaultTerminal) -> Result<()> {
        let mut action_sentinel = MouseActionSentinel::default();
        let mut mouse = Mouse::default();

        while !self.state.should_quit {
            terminal.draw(|frame| ui::draw(frame, &self.state, &mouse, &mut action_sentinel))?;

            mouse.event_consumed();

            if crossterm::event::poll(Duration::from_millis(50))? {
                match crossterm::event::read()? {
                    Event::Mouse(mouse_event) => match mouse_event.kind {
                        MouseEventKind::Up(mouse_button) => match mouse_button {
                            MouseButton::Left => {
                                mouse.set_event(crate::mouse::MouseEventKind::Click);
                            }
                            MouseButton::Right => {
                                mouse.set_event(crate::mouse::MouseEventKind::RightClick);
                            }
                            _ => {}
                        },
                        MouseEventKind::Moved => {
                            mouse.set_position(Position {
                                x: mouse_event.column,
                                y: mouse_event.row,
                            });
                        }
                        MouseEventKind::ScrollDown => {
                            mouse.set_event(crate::mouse::MouseEventKind::ScrollDown);
                        }
                        MouseEventKind::ScrollUp => {
                            mouse.set_event(crate::mouse::MouseEventKind::ScrollUp);
                        }
                        _ => {}
                    },
                    Event::Key(key) => {
                        if key.kind == KeyEventKind::Press {
                            events::handle_key(key, &mut self.state);
                            match self.state.focus {
                                crate::state::Focus::HexView => {
                                    events::handle_key_in_hex_panel(key, &mut self.state)
                                }
                                crate::state::Focus::Details => {}
                            }
                        }
                    }
                    _ => {}
                }
            }
        }
        Ok(())
    }
}
