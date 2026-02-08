// Session Storage stores data only for the current session

// Set item
sessionStorage.setItem("sessionName", "Avijit");

// Get item
const sessionUser = sessionStorage.getItem("sessionName");
console.log(sessionUser); // "Avijit"

// Remove item
// sessionStorage.removeItem("sessionName");

// Clear all items
// sessionStorage.clear();
