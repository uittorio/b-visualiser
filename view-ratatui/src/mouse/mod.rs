use ratatui::layout::Position;
use std::time::{Duration, Instant};

#[derive(Default)]
pub struct Mouse {
    position: Position,
    event: Option<MouseEvent>,
    last_event: Option<MouseEvent>,
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
    pub kind: MouseEventKind,
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

    pub fn event_kind(&self) -> Option<&MouseEventKind> {
        self.event.as_ref().map(|e| &e.kind)
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
