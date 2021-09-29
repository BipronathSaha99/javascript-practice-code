/**
 * Fibonacci Series 
 * Fibonacci series is a series that generates subsequent series of numbers by the addition of the two previous numbers. The first two terms of the Fibonacci series are zero and one, respectively. And the next terms are the addition of the two previous terms.
 * Formula:  Fn = (Fn-1)+(Fn-2) where Fn represents the addition of the previous numbers and (Fn-1) represnts the first terms and (Fn-2) represents the second terms. 
 * Steps to find the fibnacci series-
 * step-1: Declare the variables num1,num2,fn,n,i 
 * Step-2: Initialze the local variable num1=0,num2=1 
 * Step-3: Read the number from the user 
 * Step-4: Display the values of x and y 
 * Ste-5: Repeat the process of fibonacci untill i>n
 * 
 * fn = num1+num2
 * display the value of fn
 * x=y and y=z
 * i=i+1
 * Step-6: Stop the execution 
 */

/*
//Declare the variable 
let numOne = 0, numTwo = 1 , fn;
// let num = parseInt(prompt("Enter the limit for fibonacci series: "));
let num = 5; //fibonacci limit number that takes from user

console.log("Fibonacci Series: "); 

for(let i = 1;i<=num;i++){
    console.log(numOne); //print the numOne
    fn = numOne + numTwo; // sum of the two previous numbers 
    [numOne,numTwo]=[numTwo,fn]; //assign the numTwo value into numOne and fn value into numTwo
    
}
*/

/**
 * Fibonacci series using recursion 
 * Formula: fn = (fn-1) + (fn-2) where fn represents the the additon of the two previous number and (fn-1) represents the first terms and (fn-2) represents the second  terms 
 * call a recursive function 
 * function fibonacci(num){
 *   if(num<2){
 *     ... ...
 * }
 * else{
 *   ... ...
 * }
 * 
 * }
 */

// arrow function to display fibonacci sequence using recursion
/*
const fibonacci = (num) =>{
    if(num<2){
        return num;
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}

//take nth term for the fibonacci number that user wants to print
// const nthTerm = parseInt(prompt("Enter the limit for fibonacci number = "));
const nthTerm = 5;

if(nthTerm<=0){
    console.log("Enter the positive integer.")
}
else{
    for(let i = 0; i<nthTerm; i++){
        console.log(fibonacci(i));
    }
}
*/

/*
Fibonacci series using array

*/

/**
 * To find the fibonacci series-
 * The Rule is xn = xn−1 + xn−2
 * where: 
 * xn is term number "n"
 * xn−1 is the previous term (n−1)
 * xn−2 is the term before that (n−2)
 */
//Fibonacci Series
/*
const fibonacci = (num)=>{
    const fib = [0,1];
    for(let i=2; i<num; i++){
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib;
}
console.log(fibonacci(5));
*/

class Fibonacci{
    constructor(num){
        this.num = num;
    }
    get clacFib (){
        return this.fibonacci();
    }
    fibonacci(){
        const fibArray = [0,1];
        let nextFibItem = 0;
        while(nextFibItem<this.num){
            nextFibItem = fibArray[fibArray.length-1] + fibArray[fibArray.length-2];
            fibArray.push(nextFibItem);
        }
        for(let i=0; i<fibArray.length-1; i++){
            console.log(fibArray[i]);
        }
    }
}
let fibonacciOne = new Fibonacci(5)
fibonacciOne.clacFib;