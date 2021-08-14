//Function 

/* 
function is used to define the code once and use the code multiple times 

function invocation 
1) When the events occur (when the user click on the button)
2) Automatically (self invoked)
3)When it's called from JS code 

*/
//calculator using function
/*
function cal(a,b,op){
    let numOne = a ,numTwo = b, result; 
    
    if (op == "+"){
        result = numOne + numTwo;
    }
    else if(op == "-"){
        result = numOne - numTwo;
    }
    else if(op == "*"){
        result = numOne * numTwo;
    }
    else if(op =="/"){
        result = numOne/numTwo;
    }

    console.log(`The result is = ${result}`);
}
let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));
let op = prompt("Select the operator: ");
cal(a,b,op);
*/

//return keyword
/*
function add(a,b){
    return a+b;
}
console.log(add(4,3));

*/

/*
function cal(a,b,op){
    let numOne = a ,numTwo = b, result; 
    
    if (op == "+"){
        result = numOne + numTwo;
    }
    else if(op == "-"){
        result = numOne - numTwo;
    }
    else if(op == "*"){
        result = numOne * numTwo;
    }
    else if(op =="/"){
        result = numOne/numTwo;
    }

    return (`The result is = ${result}`);
}
let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));
let op = prompt("Select the operator: ");
console.log(cal(a,b,op));
*/
/*
function name(first, middle, last){
    return `My name is ${first} ${middle} ${last}`;
}
console.log(name("Ram","Prasad","Saha"));
*/
//  local variable


function name(){
    let firstName,lastName;
    firstName = prompt("Enter first name: ");
    lastName = prompt("Enter last name: ");
    return `My name is ${firstName} ${lastName}`

}
console.log(name());




