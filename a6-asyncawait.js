
// In JavaScript, async and await are used to work with asynchronous code and handle promises in a more readable manner

// Simplifying Promise Syntax:

// Without async and await, dealing with promise chains can result in nested callbacks, which may lead to callback hell or the "pyramid of doom."











// function p (){
//     return new Promise ((resolve , reject )=>{
//         resolve('promise return')
//     })
// }
// function getData (){
//     return p();
// }

// async function getData (){
//     return 'promise return';
// }

// getData()
// .then((res)=>{
// console.log('res =', res);
// })
// .catch((err)=>{
//     console.log('err =', err);
// })










// // Without async/await

// somePromiseFunction()
//     .then(result => {
//         return anotherPromiseFunction(result);
//     })
//     .then(finalResult => {
//         console.log(finalResult);
//     })
//     .catch(error => {
//         console.error(error);
//     });







// // With async/await

// async function fetchData() {
//     try {
//         let result = await somePromiseFunction();
//         let finalResult = await anotherPromiseFunction(result);
//         console.log(finalResult);
//     } catch (error) {
//         console.error(error);
//     }
// }







const pp = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        if(!true){
            resolve('Promise resolve')
        }else{
            resolve('Promise reject')
        }
    },1000)
})
function getData2 (){
    pp
    .then((res)=>{
        console.log('res =',res);
    })
    .catch((err)=>{
        console.log('res =',err);
    })
    console.log('below code1');
}

async function getData3 (){
    try{
        
        const res = await pp
        console.log(res);
        console.log('below code2');
    }catch(err){
        console.log('err =', err);
    }
}

// getData2()
getData3()