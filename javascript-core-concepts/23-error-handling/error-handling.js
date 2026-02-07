// Try-Catch is used to handle errors

try {
  const result = riskyFunction();
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error.message);
} finally {
  console.log("This always runs");
}

function riskyFunction() {
  throw new Error("Something went wrong!");
}
