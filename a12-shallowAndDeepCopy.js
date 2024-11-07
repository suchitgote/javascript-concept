

const user = { name : 'suchit' , location : { city :'wardha' } , age : 22}
const shalowUser = {...user , gender : "male"}
// const shalowUser = JSON.parse( JSON.stringify ({...user , gender : "male"})) // deep copy

console.log('user       =',user);
console.log('shalowUser =',shalowUser);
console.log('....................');

shalowUser.name = 'gote';
shalowUser.age = 23;
shalowUser.location.city = 'pune';

console.log('user       =',user);
console.log('shalowUser =',shalowUser);