# Microtask vs Macrotask

## Microtask
- High priority queue
- Examples: Promise callbacks, process.nextTick
- Executes before macrotasks

## Macrotask
- Normal task queue
- Examples: setTimeout, setInterval, setImmediate

## Why it matters
- Understanding this helps predict execution order
- Critical for async programming
