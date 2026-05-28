use crate::{
    bytes::selected_byte_details::SelectedByteDetails, events, files::file::LoadedFile,
    mouse_action_sentinel::MouseActionSentinel, state::AppState, ui,
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
        let mut action_sentinel = MouseActionSentinel::default();

        while !self.state.should_quit {
            terminal.draw(|frame| ui::draw(frame, &self.state, &mut action_sentinel))?;

            if crossterm::event::poll(Duration::from_millis(50))? {
                if let Event::Key(key) = crossterm::event::read()? {
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
            }
        }
        Ok(())
    }
}
