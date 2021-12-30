# Wasm(webassembly) js(javascript) fundamental
This is the basic js program with wasm 

## How to run?

  1. How to run dev server? 
```bash
npm run serve
```

  2. How to build the project?
```bash
npm run build
```

  3. How to Deploy to github pages?
```bash
npm run deploy
```

## WASM (WebAssembly)
Keyword files are stored in binary format. In order to use them within a JavaScript environment you need to convert them to a `Uint8Array`. You may use any tool to read the keyword file byte-by-byte(`webassembly binary format` or `wasm`). On a Linux box you can use `xxd` utility(`hexdump` utility). 
For example, To display Single octets per group(default is 2), And file name is 'main.wasm' & is at current location

```bash
xxd -g1 main.wasm
```

Output as follow:
```wasm
00000000: 00 61 73 6d 01 00 00 00 01 07 01 60 02 7f 7f 01  .asm.......`....
00000010: 7f 03 02 01 00 07 07 01 03 73 75 6d 00 00 0a 09  .........sum....
00000020: 01 07 00 20 00 20 01 6a 0b 00 18 04 6e 61 6d 65  ... . .j....name
00000030: 01 06 01 00 03 73 75 6d 02 09 01 00 02 00 01 61  .....sum.......a
00000040: 01 01 62                                         ..b
```

For help
```bash
xxd -h
```

`webassembly binary format`'s equivalent `webassembly text format` as follows
```js
(module
  (func $sum (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add
  )
  (export "sum" (func $sum))
)
```

## Source

  * [wat to wasm converter](https://webassembly.github.io/wabt/demo/wat2wasm/)
  * [AssemblyScript](https://www.assemblyscript.org/)