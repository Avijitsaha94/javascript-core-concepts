// DOM Events allow us to respond to user interactions

const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("Button clicked!");
});

const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  console.log("Input value:", e.target.value);
});
