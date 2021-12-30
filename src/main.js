// alert("Hello Wasm World!");
async function init() {
  const wasmResp = await fetch('main.wasm'); // byteArray
  const buffer = await wasmResp.arrayBuffer();
  // console.log(buffer);
  
  const wasm = await WebAssembly.instantiate(buffer);
  const sumFunction = wasm.instance.exports.sum;

  const a = prompt('Enter first value to be added :', 13);
  const b = prompt('Enter second value to be added :', 10);

  const result = sumFunction(a, b);
  // debugger;
  console.log(`Result is : ${result}`);
  alert(`Result is : ${result}`);
}

init();