import {text,setText,sum, prod, binaryToDecimal} from  './module.js';

console.log(text);

//find the new text
setText("Good Evening...");
console.log(text);

//find the sum
sum(4,4);
console.log(`The result is = ${sum}`);


//find product 
prod(5,20);
console.log(`The product of two numbers is = ${prod}`);

//conversion the binary to decimal
binaryToDecimal(101);
console.log(`The decimal result of the given binary number is = ${binaryToDecimal}`);