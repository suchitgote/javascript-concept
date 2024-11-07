// Call Stack  ----->> Web APIs environment ----->> Callback Queue ------>> Call Stack

// In JavaScript, the event loop is a crucial concept that manages the execution of code in a non-blocking and asynchronous manner. It plays a significant role in handling events, I/O operations, and callbacks. The event loop enables JavaScript to handle multiple operations concurrently without blocking the execution of the entire program.

// Here's a simplified explanation of how the event loop works:

// 1. **Call Stack:**
//    - The JavaScript engine uses a data structure known as the call stack to keep track of the execution of functions. When a function is called, it is added to the top of the call stack.

// 2. **Execution:**
//    - The code in the function is executed in a synchronous manner. If there are function calls within the function, they are added to the call stack as well.

// 3. **Asynchronous Operations:**
//    - JavaScript is single-threaded, meaning it can execute one operation at a time. However, it can handle asynchronous operations efficiently through the event loop.
//    - When an asynchronous operation (such as a timer, an HTTP request, or a user interaction) is encountered, it is moved to the Web APIs environment provided by the browser (or Node.js).

// 4. **Callback Queue:**
//    - Once an asynchronous operation is completed, a callback associated with that operation is placed in the Callback Queue.

// 5. **Event Loop:**
//    - The event loop constantly checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the queue and pushes it onto the call stack for execution.

// 6. **Execution Continues:**
//    - The asynchronous operation's callback is executed, and the process continues. If there are more asynchronous operations, they follow the same process.

// This cycle of checking the call stack, handling asynchronous operations, and executing callbacks continues, allowing JavaScript to handle multiple tasks concurrently without blocking the main thread.

// Here's a simple example to illustrate the event loop:

// ```javascript
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout callback');
// }, 2000);

// console.log('End');
// ```

// In this example, "Start" and "End" will be logged first, and after a 2-second delay, "Timeout callback" will be logged. The event loop ensures that the setTimeout callback is executed asynchronously, allowing other code to run in the meantime.



console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

console.log("End");


// Start
// End
// Microtask: Promise.then
// Macrotask: setTimeout
