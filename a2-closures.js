// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)

function first(){

    let a = 1
    let b = 2
    return function two(){
        return a;
    }
}

let result = first();
// console.log('result =', result());

// function two memoize all variable address of it's lexical environment , which can be use , even if it's parent function call ended.

// disadvantages
// The variables (a) declared inside a closure are not garbage collected where b is garbage collected

// 
function x(){
    for (var i = 0; i < 5; i++) {
        setTimeout( ()=> {
            console.log(i);
        },1000); // Adjust the delay as needed
      }
}
// x()
function y(){
    for (let i = 0; i < 5; i++) {
        setTimeout( ()=> {
          console.log(i);
        },i*1000); // Adjust the delay as needed
      }
}
// y()


// using closure
function z(){
    for (var i = 0; i < 5; i++) {
        function print (n){
            setTimeout( ()=> {
                console.log(n);
            },n*1000); 
        }
        print(i)
      }
}
// z();


// Data hiding and encapsulation 

function one(){
    var count = 0 
    return ()=>{
      return  ++count;
    }
}

let output = one();
// console.log('output =', output());
// console.log('output =', output());
// console.log('output =', output());

// constructor function

function counter (){
    var count = 0 ;
    this.inc = ()=>{
        count++
        console.log(count);
    }
    this.dec = ()=>{
        count--
        console.log(count);
    }
}

let c1 = new counter()
let c2 = new counter()
// c1.inc()
// c1.inc()
// c2.inc()
// c2.inc()

aa()
function aa(){
    console.log('aa');
}
console.log( bb )
console.log( bb() )
var bb = ()=>{
    console.log('bb')
}