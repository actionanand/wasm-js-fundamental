!async function(){const t=await fetch("main.wasm"),e=await t.arrayBuffer(),a=(0,(await WebAssembly.instantiate(e)).instance.exports.sum)(prompt("Enter first value to be added :",13),prompt("Enter second value to be added :",10));console.log(`Result is : ${a}`),alert(`Result is : ${a}`)}();