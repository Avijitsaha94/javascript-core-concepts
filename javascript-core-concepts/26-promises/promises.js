// Promise represents a value that may be available now, later, or never

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 2000);
});

myPromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
