// Scope determines where variables can be accessed

let globalVar = "I am global";

function testScope() {
  let functionVar = "I am inside function";
  console.log(globalVar); // accessible
}

testScope();

// console.log(functionVar); ❌ not accessible
