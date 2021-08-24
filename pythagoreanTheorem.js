/*
Pythegorean Theorem: 
Pythegorean Theorem states that the area of tbe square whose side is hypotenuse is equal to the
sum of the area of the squares of other two sides
*/

//called arrow function to calculate the pythegorean theorem
let area = () =>{
    let hypotenuse = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    return hypotenuse;
}

//Driver code 
let a = 3; 
let b = 4;
//print the function
console.log(area());
