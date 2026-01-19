// Default parameters give a default value if no argument is passed

function greet(name = "Guest") {
  console.log("Hello", name);
}

greet("Avijit");
greet(); // Guest
