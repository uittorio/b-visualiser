mod app;
mod bytes;
mod events;
mod files;
mod mouse;
mod state;
mod ui;

use std::{env, fs::OpenOptions, io::Write, path::PathBuf};

use anyhow::{Result, anyhow};
use crossterm::{
    event::{DisableMouseCapture, EnableMouseCapture},
    execute,
};

/// Restores the terminal on drop, so cleanup runs even on panic.
struct TerminalGuard;

impl Drop for TerminalGuard {
    fn drop(&mut self) {
        let _ = execute!(std::io::stdout(), DisableMouseCapture);
        ratatui::restore();
    }
}

fn main() -> Result<()> {
    let mut terminal = ratatui::init();
    execute!(std::io::stdout(), EnableMouseCapture)?;
    let _guard = TerminalGuard;

    let filepath = env::args()
        .skip(1)
        .next()
        .or_else(|| read_cached_filepath());

    let Some(filepath) = filepath else {
        return Err(anyhow!("Provide a filepath as first parameter"));
    };
    write_cached_filepath(filepath.as_str());

    let result = app::App::new(filepath).run(&mut terminal);

    result
}

fn read_cached_filepath() -> Option<String> {
    String::from_utf8(std::fs::read(&cache_path()?).ok()?).ok()
}

fn write_cached_filepath(filepath: &str) -> Option<()> {
    let mut file = OpenOptions::new()
        .create(true)
        .truncate(true)
        .write(true)
        .open(cache_path()?)
        .ok()?;
    write!(&mut file, "{}", filepath).ok()
}

fn cache_path() -> Option<PathBuf> {
    let binary_path = env::current_exe().ok()?;
    let binary_dir = binary_path.parent()?;
    Some(binary_dir.join("lastfile.bin"))
}
