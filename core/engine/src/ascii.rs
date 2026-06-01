// for more information about ascii symbols visit https://www.ascii-code.com/

const ASCII_CONTROL_NAMES: [&str; 32] = [
    "NUL", "SOH", "STX", "ETX", "EOT", "ENQ", "ACK", "BEL", "BS", "HT", "LF", "VT", "FF", "CR",
    "SO", "SI", "DLE", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN", "ETB", "CAN", "EM", "SUB", "ESC",
    "FS", "GS", "RS", "US",
];

pub fn ascii_symbol(b: u8) -> String {
    match b {
        0..=31 => ASCII_CONTROL_NAMES[b as usize].into(),
        32 => "SP".into(),
        33..=126 => (b as char).into(),
        127 => "DEL".into(),
        _ => "".into(),
    }
}

pub fn byte_to_printable_ascii(b: u8) -> String {
    match b {
        32..=126 => (b as char).into(),
        _ => ".".into(),
    }
}
