//Array in JavaScript 
//An array is a special variable which store multiple elements at a time 

// let array = ['Bipronath Saha',22,'EEE','BSMRSTU']; //method1
//print the value of the array
//console.log(array);

// let array = new Array('Bipronath Saha',22,'EEE','BSMRSTU'); // method 2
// console.log(array);

// let array = ['Bipronath Saha',22,'EEE','BSMRSTU']; 
//access the value of array element
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

//access the first element of an array
// console.log(array[0]);
// access the last element of the array
// console.log(array[array.length-1]);


//array method
//adding array elements

//push(): it adds any elements to the end of the array 
// let array = new Array("Bipronath Saha",22,"EEE","BSMRSTU");
// array.push("Dhaka","Bangladesh");
// console.log(array);
// console.log(">>>>>>>>")
//pop(): it removes the last elements of the array 
// array.pop();
// console.log(array);

//shift(): it removes the first element of the array
// array.shift();
// console.log(array);

//unshift(): it adds any elements to the beginning of an array
// array.unshift("Hey");
// console.log(array);

// Deleting array element: using delete operator any array elements can be deleted 
//delete array[1];
// console.log(array[1]);

//concatenating arrays 
// let arrayOne = ["Bipronath","EEE",22,"BSMRSTU"];
// let arrayTwo= ["Tanmoy","CSE",22,"MBSTU"];
// let array = arrayOne.concat(arrayTwo);
// console.log(array);

//splice(): It can be used to add an element in an array as well as to remove an element in an array
//adding element using splice()

/*
var names = ["Bipronath", "Tanmoy", "Monosij","Antik"];
console.log(names);*/
/*
names.splice(3,0,"Emon","Bijoy");
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
*/

console.log(">>>============================<<<");
// names.splice(3,1,"Emon","Bijoy");
// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);

//removing elements 
// names.splice(0,1);
// console.log(names);

//slice()
/*
var fruits = ["Banana","Waterlemon", "Mango","Jackfruits","Guava"];
var fruits1= fruits.slice(0,2);
console.log(fruits1);
*/

// sorting Arrays
//The sort() method sorts an array alphabetically:
/*
var names = ["Bipro","Tanmoy","Monosij","Antik","Emon","Bijoy"];
names.sort();
console.log(names);
console.log(">========================<");
// reverse the array
names.reverse();
console.log(names);
*/
// This sort()and reverse() will applicable for only string datatype
/*
//sort the numbers 
var numOne = [5,3,1,6];
numOne.sort((a, b) => {
    return a-b;
})
console.log(numOne);

// reverse the numbers 
numOne.sort((a, b) => {
    return b-a;
})
console.log(numOne);
*/
//Sorting an array in a random numbers 
// let num = [40, 100, 1, 5, 25, 10];
// for(let i=(num.length-1); i>0; i--){
//     let j = Math.floor(Math.random()*i);
//     let k = num[i];
//     num[i]=num[j];
//     num[j]=k;

// }
// console.log(num);

//loop in array
// let names = ["Bipro","Tanmoy","Monosij","Antik","Bijoy"];
// //iterate over names to print the values of array 
// console.log("The names are: ");
// for(let i=0;i<names.length;i++){
//     let store = names[i];
//     console.log(store);
// }
/*
let names = new Array();

//append the empty array
for(let i=0; i<5;i++){
    names[i] = prompt("Enter name:");
}
//print array
for(let i=0; i<names.length;i++){
    console.log(names[i]);
}
*/
let num = [];
for(let i=0;i<5;i++){
    num[i]=parseInt(prompt(`Enter ${i+1} num: `));
}
let sum = 0;
console.log("The numbers are:");
for(let i=0; i<num.length;i++){
    console.log(num[i]);
    sum=sum+num[i];
}
console.log(`The sum is = ${sum}`);