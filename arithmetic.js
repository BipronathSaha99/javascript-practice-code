//Arithmetic Operation 

//input 
var numOne = 14;
var numTwo = Number("55") ;
//addition
var result =  numOne + numTwo;
//output
console.log("The Summation of two numbers: ",result);

//substraction 
var subRes= numOne-numTwo;
console.log("The Result is:", subRes);

//multiplication

var mulRes= numOne*numTwo;
console.log("The Result of multiplication: ",mulRes);

//divition

var divRes= numOne/numTwo;
console.log("The Result: ",divRes);

//modulus
var modRes= numOne%numTwo;
console.log("The Result: ",modRes);

//Exponential 
var exRes= numOne**2; // Exponential Ex
console.log("The Result: ",exRes);

var exRes1= Math.pow(numTwo,2); // Exponential Ex
console.log("The Result: ",exRes1);

//increment
let x=5;
let y=x++;
console.log(y, x) //post increment
x=5;
let z=++x;
console.log(z,x); //preincreament

//Decrement
y=x--;
console.log(y, x);
y=--x;
console.log(y,x);
