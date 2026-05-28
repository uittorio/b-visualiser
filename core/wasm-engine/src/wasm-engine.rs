use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn read(file_bytes: &[u8], from_byte: u32, length: u32) -> Result<JsValue, JsError> {
    serde_wasm_bindgen::to_value(&engine::read(file_bytes, from_byte, length))
        .map_err(|e| JsError::new(format!("cannot parse result: {}", e).as_str()))
}

#[wasm_bindgen]
pub fn details(file_bytes: &[u8], from_byte: u32) -> Result<JsValue, JsError> {
    serde_wasm_bindgen::to_value(&engine::details(file_bytes, from_byte))
        .map_err(|e| JsError::new(format!("cannot parse result: {}", e).as_str()))
}
