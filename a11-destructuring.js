const arr = [1,2,3,4,5]

const [a,b,c ,d] = arr
// console.log('a = ',a ,b , c , d);


const obj = {
    fname : 'abc',
    info : {
        age : 90,
        constact : {
            number : 2222222,
            address: 'addresssssssssss'
        }
    },
    height : 8
}

const {
    fname : firstName , 
    info : { 
        age , 
        constact : {
            number , 
            address
        }
    }  , 
    height = 5.5
} = obj
console.log('name = ',  firstName);
console.log('age , constact= , number ',  age  , number , address , height);


const inter =  setInterval(()=>{
    console.log('l');
},1000)

setTimeout(()=>{
    clearInterval(inter)
},4000)