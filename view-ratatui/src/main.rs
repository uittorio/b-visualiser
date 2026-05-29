mod app;
mod bytes;
mod events;
mod files;
mod mouse;
mod state;
mod ui;

use anyhow::Result;
use crossterm::{
    event::{DisableMouseCapture, EnableMouseCapture},
    execute,
};

/// Restores the terminal on drop, so cleanup runs even on panic.
struct DisableMouseCaptureGuard;

impl Drop for DisableMouseCaptureGuard {
    fn drop(&mut self) {
        let _ = execute!(std::io::stdout(), DisableMouseCapture);
    }
}

fn main() -> Result<()> {
    let mut terminal = ratatui::init();
    execute!(std::io::stdout(), EnableMouseCapture)?;
    let _guard = DisableMouseCaptureGuard;

    let result = app::App::new().run(&mut terminal);
    ratatui::restore();

    result
}
