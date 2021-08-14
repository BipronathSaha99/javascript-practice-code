//Arrow Function in JavaScript
//An arrow function is the shorter way to declare the function 
/*
Syntax of arrow function

let variable (parameter)=>{
    //code block
}
*/

// function add(numOne, numTwo){
//     return numOne+numTwo;
// }
// console.log(add(4,5));

// using arrow function
// let hello = () =>{
//     return "Hello Bipronath";
// }
// console.log(hello())

// let greet = (user)=>{
//     return `Hello ${user}`;
// }
// console.log(greet('Bipronath Saha'));

// let hello=() =>"Hello Bipronath Saha";

// console.log(hello());  // This format will work if the function has one statement

// arrow function for multiple lines of code
// let result = (numOne, numTwo)=>{
//      let add = numOne+numTwo;
//      return add;
// }
// let numOne = 4, numTwo = 5;
// console.log(result(numOne, numTwo));

//arrow function as an Expression

// let age = 4;
// let welcome = (age<18)? ()=>console.log("Baby"): ()=>console.log("Adult");
// welcome();

let device = "Huwaei";
let deviceCompany = (device == "Huwaei")?()=>console.log("Perfect device"): ()=> console.log("Not recomanded");
deviceCompany();