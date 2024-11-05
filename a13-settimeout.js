
console.log('start');
setTimeout(()=>{
    console.log('call back');
},2000)
console.log('end');

let sd = new Date().getTime();
let ed = new Date().getTime();
while( ed < sd + 5000 ){
    ed =  new Date().getTime();
}