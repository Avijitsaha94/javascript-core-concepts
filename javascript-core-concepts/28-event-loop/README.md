# Event Loop

## What is Event Loop?
The Event Loop is a mechanism that allows JavaScript
to perform non-blocking operations by offloading tasks to the browser or Node.js APIs.

## How it works
- Synchronous code runs first
- Asynchronous tasks (like setTimeout) wait in the task queue
- Event Loop picks tasks from queue and executes

## Why important
- Explains async behavior
- Helps debug execution order
