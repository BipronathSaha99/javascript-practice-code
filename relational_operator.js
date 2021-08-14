/*Realational operators

A relational operator is a programming language construct or operator that defines or tests some kinds of relations between two entites 

*/

let numOne = 5, numTwo = 6;
let numRel = (numOne< numTwo); // less than operator 
console.log(numRel);

numOne = 4, numTwo = 3;
numRel = (numOne > numTwo);
console.log(numRel);   // grreter than

numOne = 4 , numTwo = 4;
numRel = (numOne == numTwo); // equal to operator
console.log(numRel);

numOne = 4 , numTwo = 5;
numRel = (numTwo<= numOne); // less than or equal operator
console.log(numRel);

numOne = 4 , numTwo = 5;
numRel = (numTwo>= numOne); // greater than or equal operator
console.log(numRel);

numRel = (numOne != numTwo); // not equal operator
console.log(numRel);

numRel = (numTwo != numOne); // not equal operator
console.log(numRel);

// to check type coercion using relational operator 
console.log(">> Relational operator using string <<")
let textOne = "pen" , textTwo = "book";
let relCheck = (textOne < textTwo); 

console.log(relCheck);

relCheck = (textOne >= textTwo); 
console.log(relCheck);

textOne = "pencil" , textTwo = "pen";
relCheck = (textOne> textTwo);
console.log(relCheck);

relCheck = (textTwo >= textOne);
console.log(relCheck);

relCheck = (textTwo != textOne);
console.log(relCheck);

let num1 ='3' , num2 = 3;
let relGes = (num1===num2);
console.log(relGes);

