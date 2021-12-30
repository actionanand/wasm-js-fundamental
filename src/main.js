// alert("Hello Wasm World!");
async function init() {

  // js memory for wasm
  const jsMemory = new WebAssembly.Memory({ initial: 1 }); // 1 page memory; around 64kb

  const importObj = {
    jsMem: {
      myJsMem: jsMemory
    },
    console: {
      log: () => {
        console.log("Just logging from 'main.js'");
      },
      error: () => {
        console.log("I'm logging error message from'main.js'");
      }
    }
  };

  const wasmResp = await fetch('main.wasm'); // byteArray
  const buffer = await wasmResp.arrayBuffer();
  // console.log(buffer);
  
  const wasm = await WebAssembly.instantiate(buffer, importObj);
  const sumFunction = wasm.instance.exports.sum;

  // accessing memory from wasm
  // const wasmMemory = wasm.instance.exports.wasmMem;
  // console.log({wasmMemory});

  // displaying the data from memory
  console.log({jsMemory});
  const uInt8Array = new Uint8Array(jsMemory.buffer, 0, 5);
  const textFromWasmInJsMem = new TextDecoder().decode(uInt8Array);
  console.log('Text from wasm memory inside Js created memory: ', textFromWasmInJsMem);

  const a = prompt('Enter first value to be added :', 13);
  const b = prompt('Enter second value to be added :', 10);

  const result = sumFunction(a, b);
  // debugger;
  console.log(`Result is : ${result}`);
  alert(`Result is : ${result}`);
}

init();