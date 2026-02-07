// Async/Await is syntax sugar over Promises

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
}

async function getData() {
  console.log("Start fetching...");
  const data = await fetchData();
  console.log(data);
  console.log("Fetching done!");
}

getData();
