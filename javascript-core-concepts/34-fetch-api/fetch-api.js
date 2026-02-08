// GET request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// POST request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Hello",
    body: "Post body",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
