mod app;
mod bytes;
mod events;
mod files;
mod mouse_action_sentinel;
mod state;
mod ui;

use anyhow::Result;

fn main() -> Result<()> {
    let mut terminal = ratatui::init();
    let result = app::App::new().run(&mut terminal);
    ratatui::restore();
    result
}
