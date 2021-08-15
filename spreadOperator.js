
//spread operator 
let numberOne = [1,2,3,4];
let numberTwo = [5,6,7,8];

// let number = [1,2,3,4, ...numberTwo];
// let number = [...numberOne,...numberTwo];
let number = [1,2,4,...numberTwo,3,...numberOne]
console.log(number);
