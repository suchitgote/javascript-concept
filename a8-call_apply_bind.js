console.log('call_apply_bind');

const user = {
    fname:'suchit',
    lname:'gote',
}

function printFullname(state) {
    console.log(this.fname + ' ' + this.lname + " " + state);
}

// call
printFullname.call(user,'wardha')  // call function immediatally

// apply
printFullname.apply(user,['wardha'])  // call function immediatally

// bind
 const later = printFullname.bind(user,'wardha')  // new function return 
 later()