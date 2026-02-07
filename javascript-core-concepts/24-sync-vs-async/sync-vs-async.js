// Synchronous example
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous example
console.log("Start");

setTimeout(() => {
  console.log("Middle (Async)");
}, 2000);

console.log("End");
