// prototype is an object present with every function
// main use case is it allow inheritance , with reuseable function 

function Parent(name) {
    this.name = name;
  }
  
  Parent.prototype.intro = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const child1 = new Parent("Alice");
  const child2 = new Parent("hari");
  child1.intro(); // Output: Hello, my name is Alice
  child2.intro(); // Output: Hello, my name is Alice
  


//   Pros
// Memory Efficiency: Methods on the prototype are shared across instances, saving memory and reducing redundancy.
// Inheritance Support: Prototypes make inheritance possible, allowing objects to inherit behavior from others.
// Dynamic Nature: Since JavaScript is dynamic, you can add properties or methods to prototypes even after instances are created.
// Consistent, Reusable Code: Common methods can be defined once and reused across all instances, promoting cleaner and more organized code.

// Cons
// Complexity for Beginners: The prototype chain and its behavior can be confusing, especially with nested prototypes and inheritance.
// Slower Access in Deep Chains: Accessing a property deep in the prototype chain can be slower since JavaScript has to look up the chain.
// Limited to Objects: Prototype inheritance is designed for objects, so it doesn’t allow fine-grained inheritance as class-based systems do.
// Overriding Issues: Modifying a prototype can have unintended consequences if other parts of the code depend on the original prototype