//Array Iteration 
/*>>=====Array.forEach() method=====<<*/
//Array.forEach(): It calls a callback function once for each array element

/*
const num = [10,20,30,40,50,60];

num.forEach(function itemNumbers(value, index,array) {
    console.log(value,index,array);
})
*/
/*
const numOne = [10,20,30,40,50,60];
let txt = '';
//arrow function in forEach()
numOne.forEach((value, index, array) => {
    txt+=value;
    console.log(value);
})
*/

/*
const getValue=["Bipronath","Akash","Tanmoy","Antik"];

getValue.forEach((value, index, array) => {
    console.log(value);
})
*/
/* >>==============Array.map()==============<<*/

/*

The map() method creates a new array 
by performing a function on each array element

The map() method does not change the orginal array

The map() method doesn't execute the function \
for array elements without values
*/
/*
const num =[34,45,10,23,32];
num.map((value, index, array) => {
    console.log(value+2);
})
*/

/*Array.filter() */
//It creates a new array with array elements that passes a test
/*
const numOne = [10,20,30,40,50];
const numTwo = numOne.filter(myFunction);

function myFunction(value, index,array) {
    return value>10;
}
console.log(numTwo);
*/
// const numOne = [10,20,30,40,50];
// const numTwo = numOne.filter((value, index, array) => {
//     return value>=20
// }
// );console.log(numTwo);

/*
//Array.forEach((value, index, array) => {})
let num = [45,54,56,67,76]
num.forEach(function myNum(value, index,array){
    console.log(index, value);
})
//forEach() method calls a function once for each element

//Array.map((value, index, array) => {})
let numOne = num.map((value, index, array) => {
    return value*2;
}
)
console.log(numOne);

numOne = num.filter((value, index, array) => {
    return value>18;
})
console.log(numOne);
*/
//Array.reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue)
/*
The reduce() method runs a function on eech element of array to produce(reduce to) a single value
The reduce() method doesn't reduce the orginal array
The reduce() method works from left to right
*/
let number = [10,20,30,40,50,60];

// let sum = 0;
// for(let i = 0; i<number.length;i++){
//     sum+=number[i];
// }; console.log(sum);

// let sum = number.reduce(function myfunc(previousValue, currentValue, currentIndex, array) {
//     return previousValue+currentValue;
// });console.log(sum);

//using arrow function
/* 
let initialValue = 10;
let sum = number.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue+currentValue;
},initialValue);console.log(sum);
*/
// let sub = number.reduce((previousValue, currentValue, currentIndex, array) => {
//     return previousValue-currentValue;
// },10); console.log(sub);

//find maximum number using reduce()
// let max = number.reduce((previousValue, currentValue, currentIndex, array) => {
//     if(previousValue>currentValue){
//         return previousValue;
//     }
//     else {
//         return currentValue;
//     }
// });console.log(max);

//find minimum value from the array using reduce()
// let min = number.reduce((previousValue, currentValue, currentIndex, array) => {
//     if(previousValue<currentValue){
//         return previousValue ;
//     }
//     else{
//         return currentValue;
//     }
// });console.log(min);

// max = number.reduce((previousValue, currentValue, currentIndex, array) => {
//     return Math.max(previousValue, currentValue);
// }); console.log(max);

// min = number.reduce((previousValue, currentValue, currentIndex, array) => {
//     return Math.min(previousValue, currentValue);
// }); console.log(min);



let value= [

    {
        'name': 'book',
        'price': 100,
        'amount':2,
    },
    {
        'name': 'pen',
        'price': 5,
        'amount':2,
    },
    {
        'name':'shirt',
        'price':200,
        'amount':1,
    }
];let initialValue = 0;
console.log("========================================");
let totalPrice = value.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + (currentValue.price*currentValue.amount);
},initialValue);console.log(totalPrice);



//counting instace of values  in an array using reduce ()
/*
let valueOne = ["Bipro","Nath","Bipro","Saha","Tanmoy","Sarkar"];
let get = valueOne.reduce((previousValue, currentValue, currentIndex, array) => {
    if(currentValue in previousValue){
        previousValue[currentValue]++;
    }
    else{
        previousValue[currentValue]=1;
    }
    return previousValue;
},{});console.log(get);
*/
/*
let attendence = ['yes','no','yes','no','presence','absent','yes','absent','yes','presence'];
let result = attendence.reduce((previousValue, currentValue, currentIndex, array) => {
    if(currentValue in  previousValue){
        previousValue[currentValue]++;
    }
    else{
        previousValue[currentValue]=1;
    }
    return previousValue;
},{}); console.log(result);

*/
//array.reduceright()
let numOne = ['10','20','30','40','50','60'];
let sum =numOne.reduce((previousValue,currentValue,currentIndex,array)=>{
    return previousValue+currentValue;
});console.log(sum);
let sumOne = numOne.reduceRight((previousValue, currentValue, currentIndex, array) => {
    return previousValue+currentValue; 
});console.log(sumOne);

//Array.every()
/*
The every() method returns true if all elements in an array pass a test (provided as a function).

The method executes the function once for each element present in the array:

If it finds an array element where the function returns a false value, 
every() returns false (and does not check the remaining values)
If no false occur, every() returns true
every() does not execute the function for empty array elements.

every() does not change the original array
*/

let x = [10,20,30,40];
let y =x.every((value, index, array) => {
    if (value>18){
        return true;
    }
    else{
        return false;
    }
}); console.log(y);

let sm = [
    {'name':'Bipro','age':22,'work':"student"},
    {'name':'Nath','age':23,'work':"serviceholder"},
    {'name':'Saha','age':20,'work':"student"},
]
let sn = sm.every((value, index, array) => {
    if(index == 0){
        return true;
    }
    else{
        return (value.work==array[index-1].work);
    }
});console.log(sn);

//Array.some()
let z = x.some((value, index, array) => {
    return value>5;
});console.log(z);

let q = x.some((value, index, array) => {
    if (value<9){
        return true;
    }
    else{
        return false;
    }
});console.log(q);

//Array.find()
let q1 = x.find((value, index, array) => {
    return value>20;
});console.log(q1);

//Array.findIndex()

let num = [10,12,14,16,18,20,24,26,28,30];
let rex = num.findIndex((value,index,array)=>{
    return value>12;
}); console.log(`The index number of the passed element is: ${rex}`);

let varsity = ["DU","RU","BUET","JNU","KU","BSMRSTU","KUET"];
let vName = varsity.findIndex((value,index,array)=>{
    return value>4;
}); console.log(vName);

//Array.includes()
let varName= varsity.includes("CU");
console.log(varName);

//Array.keys();
let array1 = ['a','b','c'];
let iterator = array1.keys();
for (const key of iterator){
    console.log(key);
}
//Array.from()
const set = new Set(['foo','bar','stock','foo'])
Array.from(set);
console.log(set);
const map = new Map([[1,2],[2,4],[4,6]]);
Array.from(map);
console.log(map);

//Array.indexOf(searchElement, fromIndex)
const fruit = ["Apple","Mango","Guava","Lichi"];
const furt = fruit.indexOf("Mango");
console.log(furt);
