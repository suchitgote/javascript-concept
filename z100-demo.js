
// // // Example 1:

// // // Input: people = [1,2], limit = 3
// // // Output: 1
// // // Explanation: 1 boat (1, 2)
// // // Example 2:

// // // Input: people = [3,2,2,1], limit = 3
// // // Output: 3
// // // Explanation: 3 boats (1, 2), (2) and (3)
// // // Example 3:

// // // Input: people = [3,5,3,4], limit = 5
// // // Output: 4
// // // Explanation: 4 boats (3), (3), (4), (5)

// // // let arr = [1,1,1,2,3,4 ,3] // output 4  1,1,2   1,3   4   3
// // // let limit = 4;

// // // let count = 0 
// // // function boatcal(newArray){
// // //     console.log('..................newArray =', newArray);
// // //     let sum = newArray[0];
// // //     let removeIndex = [0];
// // //     let updatedArr = newArray;

// // //     for(let i = 0 ; i < newArray.length ; i++){
        
// // //         console.log('newArray =', newArray);
// // //         console.log('newArray[i] == limit',newArray[i] , limit,newArray[i] == limit);

// // //         if(newArray.length != 1){

// // //             for(let j = i+1 ; j < newArray.length ; j++){
// // //                 sum =   sum + newArray[j]
// // //                 removeIndex.push(j)
// // //                 if(sum == limit){
// // //                     // console.log('removeIndex =', removeIndex);
// // //                     console.log('sum for', sum);
// // //                     count++
// // //                     updatedArr = newArray.filter((item,l) => { return !removeIndex.includes(l) } )
// // //                     boatcal(updatedArr)
    
// // //                 }
// // //             }
// // //         }
// // //         if(newArray[i] == limit && newArray.length != 1){
// // //             updatedArr = newArray.filter((item,l) => { return i != l } )
// // //             console.log('sum if', newArray[i] );
// // //             count++
// // //             boatcal(updatedArr)

// // //         }else if(newArray.length == 1 && newArray[0] <= limit){
// // //             console.log('sum else', newArray[i] );
// // //             count++
// // //             break
// // //         }
// // //         sum = newArray[i+1]
// // //         removeIndex = [i+1]

// // //     }

// // //     console.log('count =', count);
// // // }

// // // boatcal(arr,limit)



// // function numBoats(people, limit) {
// //     // Sort the people's weights
// //     people.sort((a, b) => a - b);
    
// //     // Initialize pointers
// //     let left = 0;
// //     let right = people.length - 1;
    
// //     // Initialize the count of boats
// //     let boats = 0;
    
// //     // Iterate through the array
// //     while (left <= right) {
// //         // Check if both persons can fit in the boat
// //         if (people[left] + people[right] <= limit) {
// //             left++; // Move the lighter person
// //         }
// //         right--; // Move the heavier person
// //         boats++;
// //     }
    
// //     return boats;
// // }

// // // // Test cases
// // // console.log(numBoats([1, 2], 3)); // Output: 1
// // // console.log(numBoats([3, 2, 2, 1], 4)); // Output: 3
// // console.log(numBoats([1,1,1,2,2,2,2], 4)); // Output: 4
// // console.log(numBoats([1,1,1,2,2,2,2,2,3,3], 4)); // Output: 4
// // console.log(numBoats([1,2,2,2,2,3,3,4], 4)); // Output: 4




// // let arr = [5,2,13,3,8,2,2,22,2,3,4]

// // function removenode(arr){

// //     let result = []
// //     let left = 0
// //     let right = arr.length - 1;
// //     let max = 0

// //     while (left < right) {
// //         if(arr[left] < arr[left + 1]){
// //             result.push(arr[left + 1])
// //             if(max < arr[left + 1]){
// //                 max = arr[left + 1]
// //                 result = []
// //                 result.push(arr[left + 1])
// //             }
// //             left++
// //         }
// //         left++
// //     }

// // console.log('result =',result);

// // }
// // removenode(arr)


// // function memoizeWithCallback() {
// //     let cachedResult; // Variable to store the cached result
  
// //     return function(a,b) {
// //       if (!cachedResult) {
// //         cachedResult = a + b; // Call the function and store the result
// //       }
// //       return cachedResult; // Return the cached result
// //     };
// //   }
  
// //   // Example function to be memoized
// //   function calculateSum(a, b) {
// //     console.log("Calculating sum...");
// //     return a + b;
// //   }
  
// //   // Case 1: Call the function and store the result
// //   const memoizedSum = memoizeWithCallback();
  
// //   console.log(memoizedSum(2, 3)); // Output: Calculating sum... 5 (Calculate and store result)
// //   console.log(memoizedSum(2, 3)); // Output: 5 (Retrieve result from cache)
  
// //   // Case 2: Access the stored data in the variable
// //   console.log(memoizedSum(4, 5)); // Output: 5 (Use stored result for different arguments)
  


// let arr = [1,2,3,4,5]
// // let result = [];
// // result =  arr.map((ele)=>{
// //     return (ele * 2)
// // })
// // console.log('result =', result);

// Array.prototype.myMap = function(cb) {
//     let newArr = [];
//     for (let index = 0; index < this.length; index++) {
//         newArr.push(cb(this[index]))
//     }
//     return newArr;
// }

// let result2 = arr.myMap((item) => {
//     return item * 2
// });

// console.log('result2 =', result2);



console.log(123);
console.log(123+'');