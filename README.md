# Binary visualiser
This is a simple binary visualiser built with the idea of learning more about bytes

## What features does include

### Hex visualiser
Visualise bytes in hex format

### Cache files
This app caches previous files into javascript IndexDB

### Byte details
Select a byte to visualise what represents in: 
- decimal of the byte
- decimals selecting next byte(s)
- Binary

## How to run this project
This project is available at [https://uittorio.github.io/b-visualiser/](https://uittorio.github.io/b-visualiser/)

### Tech stack
This project is made of 2 core components
- [view]
  UI build in simple react with vite bundling it
- [engine]
  WASM to handle bytes calculations and representations in Rust

### Run locally

#### Dependencies
- rust
- bacon (https://github.com/Canop/bacon)
- node

#### Run rust engine
```
cd engine
bacon
```

#### Run web
```
cd view
npm dev
```
