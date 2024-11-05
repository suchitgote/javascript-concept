// In JavaScript, a callback is a function that is passed as an argument to another function and is intended to be executed after the completion of a specific task or at a certain point in the program. Callbacks are commonly used in asynchronous programming, where operations such as reading a file, making an HTTP request, or handling user input may take some time to complete.

// The main reasons for using callbacks in JavaScript are:

// 1. **Asynchronous Operations:** 
// 2. **Event Handling:** 
// 3. **Modularity and Reusability:** 




// 1. **Asynchronous Operations:** 

// JavaScript is single-threaded, meaning it can only execute one operation at a time. Asynchronous operations, like fetching data from a server or reading a file, can be handled using callbacks. The callback is executed once the asynchronous operation is complete, allowing the program to continue without waiting for the operation to finish.

//    ```javascript
//    // Example of asynchronous operation with a callback
   function fetchData(callback) {
       setTimeout(function () {
           console.log("Data fetched successfully!");
           callback();
       }, 2000);
   }

   fetchData(function () {
       console.log("Callback executed after data fetch.");
   });
//    ```





// 2. **Event Handling:** 

// Callbacks are commonly used to handle events in the browser, such as button clicks, mouse movements, or keyboard inputs. You can pass a function as a callback to be executed when a specific event occurs.

//    ```javascript
//    // Example of event handling with a callback
//    document.getElementById("myButton").addEventListener("click", function () {
//        console.log("Button clicked!");
//    });
//    ```




// 3. **Modularity and Reusability:** 
// Callbacks promote modularity by allowing you to pass functions as arguments. This makes it easier to reuse code and create more flexible and extensible programs.

//    ```javascript
//    // Example of modularity and reusability with callbacks
   function performOperation(a, b, callback) {
       let result = callback(a, b);
       console.log("Result:", result);
   }

   function add(x, y) {
       return x + y;
   }
   function mul(x, y) {
    return x * y;
}

   performOperation(5, 3, add); // Output: Result: 8
   performOperation(5, 3, mul); // Output: Result: 15
//    ```

// Callbacks are an essential concept in JavaScript, especially in environments where asynchronous operations are common, like web development. However, with the introduction of newer language features and APIs, such as Promises and async/await, developers have additional tools for managing asynchronous code, which can sometimes be more readable and maintainable than using callbacks alone.

// let arr = [0,0,0,0,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,66,66,66,77,77,77,88]
// function remove(arr){
//     let count = 0;
//     let number = 0;
//     let result = []
//     console.log('arr =',arr);
//     console.log('result =',result);

//     for(let i = 0 ; i < arr.length ; i++){
//         console.log('i =',i);
//         if(count < 2){
//             count++
//             result.push(arr[i])
//             number  = arr[i]
//         }
//         if(count == 2 && arr[i] > number) {
//             count = 1
//             result.push(arr[i])
//             number  = arr[i]
//         }
//     }
// console.log('result =',result);

// }
// remove(arr)
