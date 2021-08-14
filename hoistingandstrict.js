
/*
Hoisting 

JavaScript Declarations are Hoisted
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.

**Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
*/
/*   
//Frist Example
x = 10;

console.log(`X = ${x}`);

var x;
*/

/*

//Second Example 

let x;
x = 20;
// const x = 20;
function sum (){
    console.log(`The sum of y and z is = ${y+z}`);
} sum(10,20)

console.log(`X = ${x}`);

*/  

// Strict Mode 

'use strict'


// frist example in strict mode 
const x = 20;
console.log(`X = ${x}`);

