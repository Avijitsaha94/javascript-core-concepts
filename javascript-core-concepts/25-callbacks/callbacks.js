// A callback is a function passed into another function

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Avijit", sayGoodbye);
