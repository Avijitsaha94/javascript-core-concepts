
console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 0);

console.log("End");

// Output order:
// Start
// End
// Inside Timeout
