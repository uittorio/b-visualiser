pub mod sentinel;

use std::time::{Duration, Instant};

#[derive(Default)]
pub struct Mouse {
    position: Position,
    event: Option<MouseEvent>,
    last_event: Option<MouseEvent>,
}

#[derive(Default)]
pub struct Position {
    pub x: u16,
    pub y: u16,
}

#[derive(Debug)]
pub enum MouseEventKind {
    Click,
    DoubleClick,
    ScrollUp,
    ScrollDown,
    RightClick,
}

#[derive(Debug)]
pub struct MouseEvent {
    kind: MouseEventKind,
    time: Instant,
}

impl Mouse {
    pub fn set_position(&mut self, pos: Position) {
        self.position = pos;
    }

    pub fn set_event(&mut self, kind: MouseEventKind) {
        if let (
            MouseEventKind::Click,
            Some(MouseEvent {
                kind: MouseEventKind::Click,
                time,
            }),
        ) = (&kind, &self.last_event)
            && (Instant::now() - *time < Duration::from_millis(200))
        {
            self.event = Some(MouseEvent {
                kind: MouseEventKind::DoubleClick,
                time: Instant::now(),
            });
        } else {
            self.event = Some(MouseEvent {
                kind,
                time: Instant::now(),
            });
        }
    }

    pub fn position(&self) -> &Position {
        &self.position
    }

    pub fn event(&self) -> &Option<MouseEvent> {
        &self.event
    }

    pub fn last_event(&self) -> &Option<MouseEvent> {
        &self.last_event
    }

    pub fn event_consumed(&mut self) {
        if let None = self.event {
            return;
        }

        self.last_event = self.event.take();
    }
}
