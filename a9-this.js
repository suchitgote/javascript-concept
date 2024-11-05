
// "use strict"
// in global scope
console.log('hhhhhhhhhh',this);

// in function scope
function fname() {
    console.log(this);  
    // in without strict mode  = windows 
    // because if this has value undefine or null it replace with it's global object
    // with strict mode  = undefine 
}
// fname()

const obj = {
    a : 10,
    b : function (){
        console.log("b = ",this);  
    },
    c : ()=>{
        console.log("c = ",this);  
    },
    d : function() {
        const x = ()=>{
            console.log("d = ",this);  
        }
        x();
    }
}
obj.b()
obj.c()
obj.d()



const user1 = {
    name : 'suchit',
    printName : function () {
        console.log(this.name);
    }
}

const user2 = {
    name : 'hari'
}

// user1.printName()
// user1.printName.call(user2)

