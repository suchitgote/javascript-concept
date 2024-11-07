// // it is a JavaScript object 
// // that represents the eventual completion or failure of an asynchronous operation.
// // Promises are a way to handle asynchronous operations more cleanly and avoid callback hell (a situation where nested callbacks become difficult to manage).

// // Promises provide a more structured and readable way to work with asynchronous code compared to traditional callback functions


// // A promise has three states:

// // 1 Pending: The initial state, representing that the promise is still pending and the asynchronous operation is ongoing.

// // 2 Fulfilled: The asynchronous operation completed successfully, and the promise now has a resulting value.

// // 3 Rejected: The asynchronous operation encountered an error or was unsuccessful, and the promise has a reason for the failure.


const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, such as fetching data
    setTimeout(() => {
      const success = !true; // Change to false to simulate a failure
      if (success) {
        resolve("Operation completed successfully!");
      } else {
        reject("Error: Operation failed!");
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  // Consuming the promise
  myPromise
    .then((result) => {
      console.log(result); // Output: Operation completed successfully!
    })
    .catch((error) => {
      console.error(error); // Output if there's an error: Error: Operation failed!
    });
  







function fetchdata(){
    return new Promise((resolve , reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((responce)=>{
            if(responce.ok){
                return responce.json()
            }else{
                reject('Failed to fetch data');
            }
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

// fetchdata()
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })











// Callback hell example without promises
function fetchData(callback) {
    setTimeout(() => {
      const data1 = 'First set of data';
      callback(data1, (data2, callback) => {
        setTimeout(() => {
          const data3 = 'Additional data';
          callback(data3);
        }, 1000);
      });
    }, 1000);
  }
  
  // Usage of the callback hell function
  fetchData((result1, callback1) => {
    console.log(result1);
    
    callback1((result2,callback2) => {
      console.log(result2);
      
      callback2((result3) => {
        console.log(result3);
      });
    });
  });
  












function fetchData (){
    return new Promise((resolve , reject)=>{
        const data1 = '1st '
        setTimeout(()=>{
            resolve(data1)
        },1000)
    })
}
  

fetchData()
.then((result1)=>{
    console.log('result1 =', result1);
    return new Promise((resolve , reject)=>{
        const data2 = '2nd '
        setTimeout(()=>{
            resolve(data2 + result1)
        },1000)
    })
})
.then((result2)=>{
    console.log('result2 =', result2);
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve('3nd ' + result2)
        },1000)
    })
})
.then((result3)=>{
    console.log('result3 =', result3);
})
.catch((err)=>{
console.log('err =', err);
})




















function userData() {
    console.log('userData api function call');
    return new Promise((resolve , reject)=>{
        const value = true;
        if(value){
            resolve('user data send')
        }else{
            reject('error')
        }
    })
}

function userData2() {
    console.log('userData2 api function call');
    return new Promise((resolve , reject)=>{
        const value = true;
        if(value){
            resolve('user2 data send')
        }else{
            reject('error2')
        }
    })
}

function userData3() {
    console.log('userData3 api function call');
    return new Promise((resolve , reject)=>{
        const value = true;
        if(value){
            resolve('user3 data send')
        }else{
            reject('error3')
        }
    })
}



// const result =  
// userData()
// .then((data)=>{
//     console.log('data =', data);
//     return userData2()
// })
// .then((data)=>{
//     console.log('data =', data);
//     return userData3()
// })
// .then((data2)=>{
//     console.log('data2 =', data2);
//     return data2
// })
// .catch((err)=>{
//     console.log('result error =', err);
// })

const result2  = async()=>{
    try {
        const res = await userData()
        console.log('res =', res);

        const res2 = await userData2()
        console.log('res2 =', res2);

        const res3 = await userData3()
        console.log('res3 =', res3);
        
    } catch (error) {
        console.log('result error =', error);
    }

}

result2()