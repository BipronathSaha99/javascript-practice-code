/*
Type Coercion is the process that convert value to one type from another type 


*/

let num=6;
let res= num+"4";
console.log("The result: ",res);
console.log(typeof res);

res = num + true;
console.log("The result: ",res);


res= '6'- num;
console.log("The result: ",res);

res= '6'* num;
console.log("The result: ",res);

let x= true;
let y = x+true;
console.log("The result: ",y);


let one=false;
let two = one+true;
console.log("The result: ", two);


//Type Conversion 
let numVar = Number("444");
console.log(numVar, typeof numVar);

numVarOne = String(55);
console.log(numVarOne, typeof numVarOne);

num = "123Bipronath";
console.log(parseInt(num));
