// rest
// Function Parameters:
function sum(...numbers) {  // `numbers` captures all arguments passed
   return numbers.reduce((acc, curr) => acc + curr, 0);
}
sum(1, 2, 3, 4); // Outputs: 10

// Array Destructuring:
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, secondary, ...restColors] = colors; // restColors = ['blue', 'yellow']

// Object Destructuring:
const user = { name: "Alice", age: 25, email: "alice@example.com" };
const { name, ...otherDetails } = user; // otherDetails = { age: 25, email: "alice@example.com" }



// Array Spread:
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

// Object Spread:
const user2 = { name: "Alice", age: 25 };
const updatedUser = { ...user2, age: 26 }; // { name: "Alice", age: 26 }

// Function Arguments:
function add(a, b, c) { return a + b + c; }
const nums = [1, 2, 3];
console.log(add(...nums)); // 6, as it spreads 1, 2, 3 as arguments
