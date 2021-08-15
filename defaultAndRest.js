 
//Default parameters 
/*
//frist example
//input variables 
let numOne,numTwo;
function calc(x, y = 10){
    console.log (x+y);
}
calc(3); 
calc(3,4); //without uding default parameter
*/
/*
//second example
function choice(text = "Enjoy your time"){
    console.log(text);
}
choice();

choice("JavaScript Code");
choice("Java Code");

*/

//Rest Parameter 

'use strict'

/*
function sum(x,y,...num){
    console.log(`x = ${x} , y = ${y} and z = ${num}`)
}
sum(1,2,3,4,5);
*/

//find the sum 
function add(...numbers) {
    let sum = 0;
    for(let i of numbers){
        sum = sum+i;
    }
    return sum;
}
console.log(add(1,2,3,4,6))