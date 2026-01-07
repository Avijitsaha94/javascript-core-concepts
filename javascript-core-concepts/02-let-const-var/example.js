var a = 10;   // function scoped
let b = 20;   // block scoped
const c = 30; // cannot be reassigned

b = 25;       // allowed
// c = 35;    // ❌ error

console.log(a, b, c);
