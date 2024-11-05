// In JavaScript, "hosting" refers to the behavior where variable and function declarations 
// are moved to the top of their containing scope during the compilation phase, 
// while the actual assignments or function definitions remain in place. 
// This behavior is sometimes also referred to as "hoisting."

// hosting is process where variable and function get declared
// at top of their containing scope before execution

// hosting is process where variable and function get memory allocation before execution
// let and const variable hosted in temporal dead zone until it's initialized . a = 0 ;
// in TDZ we can not access variable

// example
console.log('a =', a);
var a = 1;

// similar to 
var b 
console.log('b =', b);
b = 1;


// console.log('a );
demo();
function demo() {
    console.log('demo run');
}


// in javascript everything exest in execution box, which has 2 phase 
// 1st one in memory allocation phase and 2nd one is execution phase