use crate::{
    bytes::selected_byte_details::SelectedByteDetails,
    events::{self, handle_ui_sentinel},
    files::file::LoadedFile,
    mouse::Mouse,
    state::AppState,
    ui::{self, UiSentinel},
};
use anyhow::Result;
use crossterm::event::{Event, KeyEventKind};
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
        let mut ui_sentinel = UiSentinel::default();
        let mut mouse = Mouse::default();

        while !self.state.should_quit {
            terminal.draw(|frame| ui::draw(frame, &self.state, &mouse, &mut ui_sentinel))?;

            mouse.event_consumed();
            handle_ui_sentinel(&mut self.state, &mut ui_sentinel);

            if crossterm::event::poll(Duration::from_millis(50))? {
                match crossterm::event::read()? {
                    Event::Mouse(mouse_event) => {
                        events::handle_mouse(mouse_event, &mut self.state, &ui_sentinel);
                        mouse.store_event(mouse_event);
                    }
                    Event::Key(key) => {
                        if key.kind == KeyEventKind::Press {
                            events::handle_key(key, &mut self.state);
                        }
                    }
                    _ => {}
                }
            }
        }

        Ok(())
    }
}
