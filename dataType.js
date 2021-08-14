//Data Types 
/*
JS types are dynamic which means the same variables can hold the different types of data. 

JS Strings:
A string is a series of characters. 
JS strings are written with quote, we can use double quote or single qoute. 

JS Numbers:
JS has only one type of number. It can be with or without decimal.

Boolean has two typs:
1)true ,2) false. 

*/
//JS Types are Dynamic.
// let userVar= 20;
// userVar="Saha"
// console.log(userVar);

//String
// let userCar="Volvo";
// userCar="Honda"
// console.log(userCar);

//Number
// let num1=200;
// num1=300;
// console.log(num1);

//Boolean
// var numOne=4;
// var numTwo=5;
// console.log(numOne==numTwo);


/*==========================================================================
                                JS NUMBER DATA TYPE
===========================================================================*/

//Precision: Integers (numbers without a period or exponent notation) are accurate up to 15 digits. 

//input two variables.
// var x= 9999999900000000984;
// var y= 99999999000000944224;
//Output
// console.log(x+y); 
// The maximum number of decimal is 17, but floating point arithmetic is not always accurate 100%

/*
Adding Numbers and Strings

The issues of + 
JS uses the + operator for the addition and concatenation
Numbers are added and strings are concatenated. 


*/

//Number  addition
// let a=10,b=20, z;
// z=a+b;
// console.log("The result:",z);

//string concatenation
// let c="10",d="20", f;
// f=c+d
// console.log("The result:",f); //it concatenate the two strings and output will be 1020


//Ex- number and  strings added
// var numOne = 10, numTwo=20, numThree="30";
// var result=numOne+numTwo+numThree;
// console.log(result); // JS interpreter works left from right 

//Numeric Strings: JS will try to convert strings to numbers in all numeric operations 
/*
var x="100";
var y= "10";
var z=x/y;
var g=x*y;
var h=x-y;
console.log(z);
console.log(g);
console.log(h);
*/

//NaN- Not a Number
// let variableOne=100;
// let variableTwo="saha";
// let res=variableOne/variableTwo;
// console.log(res);

//Hexadecimal numbers
// let z=0xfac;
// console.log(z)

// let num1=32;
// console.log(num1.toString(8))

// infinity and -infinity 
// console.log(5/0);
// console.log(-5/0);

/*>>TypeOf operator<<*/
// let p="5";
// console.log(typeof p);


/*==================================================================
                        Number methods
==================================================================*/

//Number()
//toString()
//toFixed()
//toPrecision()
//ParseInt()
//parseFloat()
//toExponential()
//valueof()

let numOne=5;

console.log((numOne).toString()); //toString() Method returns the number to string 

console.log(typeof (numOne).toString());

console.log((numOne).valueOf()); //valueof() returns a number as a number
console.log(typeof (numOne).valueOf());

numOne="6"
console.log(Number(numOne)); // Number() returns the string to number
console.log(typeof Number(numOne));

numOne=9.485;
console.log(numOne.toFixed(2))//toFixed() method returns the string with the number written with a specified numbers

console.log( numOne.toPrecision(4)); //toPrecision() returns a string, with a number written with a specified length:

numOne ="7";
console.log( parseInt(numOne));  //parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

numOne = "8.3434";
console.log(parseFloat(numOne)); //parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

numOne=5.976;
console.log( (numOne).toExponential(4));  //toExponential() returns a string, with a number rounded and written using exponential notation.

