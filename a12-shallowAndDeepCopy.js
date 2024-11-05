// shallowAndDeepCopy

console.log('shallow Copy');
const originalArray = [1, [2, 3], 4];
const shallowCopy = [...originalArray];

console.log('originalArray =',originalArray);  // Output: [1, ['X', 3], 4]
console.log('shallowCopy =',shallowCopy, '/n');  // Output: [1, ['X', 3], 4]

shallowCopy[1][0] = 'X';

console.log('originalArray =',originalArray);  // Output: [1, ['X', 3], 4]
console.log('shallowCopy =',shallowCopy);    // Output: [1, ['X', 3],