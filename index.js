!async function(){const e=new WebAssembly.Memory({initial:1}),o={jsMem:{myJsMem:e},console:{log:()=>{console.log("Just logging from 'main.js'")},error:()=>{console.log("I'm logging error message from'main.js'")}}},s=await fetch("main.wasm"),n=await s.arrayBuffer(),t=(await WebAssembly.instantiate(n,o)).instance.exports.sum;console.log({jsMemory:e});const r=new Uint8Array(e.buffer,0,5),a=(new TextDecoder).decode(r);console.log("Text from wasm memory inside Js created memory: ",a);const m=t(prompt("Enter first value to be added :",13),prompt("Enter second value to be added :",10));console.log(`Result is : ${m}`),alert(`Result is : ${m}`)}();