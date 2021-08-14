//JS for...in loop
//The for...in loop in JavaScript allows to iterate over all property keys of an object 

/*
//create object 
const person = {
    name: "Bipronath Saha",
    age: 22,
    // laptop:{
    //     brand:"Asus",
    //     ram: "4 GB",
    //     hdd: '1 TB'
    // }
    university:"BSMRSTU",
    
};

// console.log(person.name);
// console.log(person.age);
// console.log(person.laptop);

// console.log(person['name']);
// console.log(person['age']);
// console.log(person['laptop']['brand']);
// console.log(person['laptop']['ram']);
// console.log(person['laptop']['hdd']);

//for ... in loop to iterate over the property key
for(let key in person){
    //display the key 
    console.log(`${key} : ${person[key]}`);
    
}

*/

/*
// update values of property
const salaries={
    Jack:24000,
    Mick: 34000,
    Richa: 34500,
    Lucy: 3499089
};

for(let key in salaries){
    //add currency symbol
    let salary = "$" + salaries[key];

    //display the salary of the object
    console.log(`${key} : ${salary}`);
} 
*/
/*
// for... in loop in string
const value = "Bipronath Saha";

//display the string
for(let x in value){
    console.log(value[x])
}
*/

// const textValue ="JavaScript";

// for(let x in textValue){
//     console.log(textValue[x]);
// }

// for...in loop in Array
// const arr = ['Bipronath','Saha', 22];
// for(let x in arr){
//     console.log(arr[x]);
// }

//for...of loop in JavaScript 
//The for..of loop in JavaScript allows to iterate over iterable objects (arrays, sets, maps, strings etc).

// const lang = "JavaScript";
// let text='' ;

// for(let x of lang){
//     text+=x;
//     console.log(text);
// }

const car = ["BMW", "Volvo", "Mini"];
let text = '';
for( let x of car){
    text+=x;
    console.log(text);
}

// for(let key in car){
//     text+=car[key];
//     console.log(text)
// }
