// Hoisting moves variable and function declarations to the top

console.log(a); // undefined
var a = 10;

sayHello();

function sayHello() {
  console.log("Hello World");
}
