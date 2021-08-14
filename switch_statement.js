//switch statement 
/*

Using the switch statement to select one of many code blocks to be executed.

*/

//simple program using switch statement.
/*
let a = 2;

switch(a){
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break; 
  default: 
    a = "not found";
    
}
console.log(`The number is ${a}`);
*/

// Type checking using switch statement 
/*
let a = 1; 

switch(a){
  case '1':
    a = 1;
    break;
  case 1:
    a = "one";
    break; 
  case "2":
    a = 2;
    break; 
  case 2: 
    a = "two"; 
    break; 
  default: 
    a = "not matched"; 
    
    
}
console.log(`The number is ${a}`);
*/

//simple calcultor using switch statement 
/*
let numOne, numTwo, operator,result;

numOne = parseFloat(prompt("Enter first number: ")); 

numTwo = parseFloat(prompt("Enter second number: ")); 

operator = prompt("Enter operator:");

switch(operator){
  case '+':
    result= numOne+numTwo;
    console.log(`${numOne} + ${numTwo} = ${result}`);
    break;
    
  case '-':
    result= numOne-numTwo;
    console.log(`${numOne}-${numTwo}=${result}`);
    break;
  case '*':
    result=numOne*numTwo;
    console.log(`${numOne}*${numTwo}=${result}`);
    break;
  case '/':
    result= numOne/numTwo;
    console.log(`${numOne}/${numTwo}=${result}`);
    break;
  default:
    console.log("Invalid operator");
    break;
}
*/
//JavaScript switch With Multiple case
/*
let fruit = "mango";

switch(fruit){
  case 'apple':
  case 'mango':
  case 'guava':
    fruit = "mango";
    break;
  default:
    fruit = "no fruits matched";
}
console.log(`${fruit} is the desired fruit.`);
*/

// to get free time 
/*
let day = prompt("What's the day of the week? ");
let time;
switch(day){
  case "Sunday":
    time = "8pm";
    break;
  case "Monday": 
    time = "7pm";
    break;
  case "Tuesday":
    time = "8pm";
    break;
  case "Wednessday":
    time = "8pm";
    break;
  case "Thursday":
    time = "8pm";
    break;
  
  default: 
    time = "Busy Schedule..."
}
console.log(`I'm free to go to anywhere at ${time}`);
*/

//use the weekday number to calculate the weekday name:

/*
let day;

switch(new Date().getDay()){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday ";
    break;
  case 4: 
    day = "Thursday";
    break;
  case 5: 
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "not a day";
    
}
console.log(`Today is ${day}`)
*/