//Loop in JS 

// while loop 
//while loop first checkes the condition and then excute the block 
/*
    while(condition){
        // code block;
    }
*/

/*
let i=1;
while(i<=5){
    console.log("Hello World..."+i);
    i++;
}*/

/*
let i=5;
while(i>0){
    console.log("Hello World..."+i);
    i--;
}
*/

//sum of the natural number
/*
let n=parseInt(prompt("Enter the number:"));
let i=1;
let sum=0;
while(i<=n){
    sum+=i;
    i++;
}
console.log(`The sum is = ${sum}`);
*/

//sum of the even number
/*
let n=parseInt(prompt("Enter the number:"));
let i=2;
let sum=0;
while(i<=n){
    sum+=i;
    i+=2;
}
console.log(`The sum is = ${sum}`);
*/

//sum of the odd number
/*
let n=parseInt(prompt("Enter the number:"));
let i=1;
let sum=0;
while(i<=n){
    sum+=i;
    i+=2;
}
console.log(`The sum is = ${sum}`);
*/

//sum of the square number
/*
let num = parseInt(prompt("Enter the number:"));
let i = 1;
let sum=0;

while(i<=num){
    sum+=(i**2);
    i++;
}
console.log(`The sum is = ${sum}`);
*/

//do while loop
//do while loop first excute the block then it checkes the condition

/*
do{
    //code block
}while(condition);
*/
/*
let i=1;
do{
    console.log("Hello World..."+i);
    i++;
}while(i<=5);
*/

//sum of natural number using do while loop
/*
let n=parseInt(prompt("Enter the number:"));
let i=1;
let sum=0;

do{
    
    sum+=i;
    i+=1;
}while(i<=n);

console.log(`The sum is = ${sum}`);
*/

//sum of even number using do while loop
/*
let n=parseInt(prompt("Enter the number:"));
let i=2;
let sum=0;

do{
    
    sum+=i;
    i+=2;
}while(i<=n);

console.log(`The sum is = ${sum}`);
*/

//sum of odd number using do while loop
/*
let n=parseInt(prompt("Enter the number:"));
let i=1;
let sum=0;

do{
    
    sum+=i;
    i+=1;
}while(i<=n);

console.log(`The sum is = ${sum}`);
*/

//sum of odd number using do while loop
/*
let n=parseInt(prompt("Enter the number:"));
let i=1;
let sum=0;

do{
    
    sum+=i;
    i+=2;
}while(i<=n);

console.log(`The sum is = ${sum}`);
*/

// for loop
/*
for(initialization;condition;increment){
    //code block
}

*/
/*
for(let i=1; i<=5;i++){
    console.log("Hello World...",i);
    for(let j=1; i<=5;i++)
        console.log(j);
}
*/

// sum of the natural number

/*
let num=10, sum=0;
for(let i=1;i<=num;i++){
    sum+=i;
}
console.log(`The sum of the first ${num} is ${sum}`);

*/

// sum of the even numbers
/*
let num = 10; 
let sum = 0;

for (let i = 2; i<=num ; i+=2){
    sum+=i;
} 
console.log(`The sum of first ${num} even numbers is ${sum}`);
*/
// sum of odd numbers
/*
let num = 10; 
let sum = 0;

for (let i = 1; i<=num ; i+=2){
    sum+=i;
} 
console.log(`The sum of first ${num} odd numbers is ${sum}`);
*/
//1**2+ 2**2+3**2+ ... ...
/*

let num = 5;
let sum = 0;
for(let i=1; i<=num;i++){
    sum+=(i**2);
}
console.log(`The sum is ${sum}`);

*/


//1**3+2**3+3**3+ ... ...
/*
let num = 3;
let sum = 0;

for (let i = 1; i<=num;i++){
   sum+= i**3;
}
console.log(`The sum is ${sum}`);
*/

//1**1+ 2**2 + 3**3 + ... ...

let num = 3;
let sum = 0;

for (let i = 1; i<=num;i++){
   sum+= i**i;
}
console.log(`The sum  is ${sum}`);

