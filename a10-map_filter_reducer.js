console.log('map_filter_reducer.js');

// map 
let arr = [1,2,3,4,5,6]
let output =  arr.map((item)=>{
    // console.log(item);
    return item;
})
console.log(output);
console.log(arr);










// filter
let arr2 = [1,2,3,4,5,6]
let output2 =  arr.filter((item)=>{
    console.log(item);
    return item % 2 == 0;
})
console.log(output2)
console.log(arr2);









// reducer
const users = [
    {
        name : 'suchit',
        age : 22
    },
    {
        name : 'suchit2',
        age : 22
    },
    {
        name : 'suchit3',
        age : 22
    },
    {
        name : 'suchit4',
        age : 24
    }
]

// find how many num of people with same age

const output3 = users.reduce((acc,cur)=>{
    if(acc[cur.age]){
        acc[cur.age] = acc[cur.age]  + 1
    }else{
        acc[cur.age] = 1
    }
    return acc
},{})
console.log(output3)
console.log(users)



