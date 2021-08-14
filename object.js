//object in JS 
/* 
JavaScript Object is a non-primitive data-type which allows to store multiple types of data

An object, is a reference data type. Variables that are assigned a reference value are given 
a reference or a pointer to that value. That reference or pointer points 
to the location in memory where the object is stored. The variables don’t actually store the value.

objects in JavaScript may be defined as an unordered 
collection of related data, of primitive or reference types, 
in the form of “key: value” pairs. These keys can be variables or functions and are called 
properties and methods, respectively, in the context of an object.

*/
/*
JavaScript Object Declaration:

const object_name = {
   key1: value1,
   key2: value2
}
*/


// let car ={};
// console.log(typeof car);

/*
//initialize object
const  student = {
    firstName: "Bipronath",
    lastName: "Saha", 
    age: 22,
    university: "BSMRSTU"
};
//Accessing Object Properties
//1. Using dot Notation

// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.age);
// console.log(student.university);


console.log(typeof student );

//2. Using bracket Notation
console.log(student["firstName"]);
console.log(student["lastName"]);
console.log(student["age"]);
console.log(student["university"]);
*/
/*
//JS nested object 
const  student = {
    firstName: "Bipronath",
    lastName: "Saha", 
    age: 22,
    university: "BSMRSTU",
    marks: {
        PHY_151: 70,
        MAT_131:75,
        EEE_121: 80,
        ENG_123: 98
    }
};
//1. Using dot Notation
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.age);
// console.log(student.university);
// console.log(student.marks);
// console.log(student.marks.PHY_151);
// console.log(student.marks.MAT_131);
// console.log(student.marks.EEE_121);
// console.log(student.marks.ENG_123);


//2. Using bracket Notation
console.log(student["firstName"]);
console.log(student["lastName"]);
console.log(student["age"]);
console.log(student["university"]);
console.log(student["marks"]);
console.log(">>Print the Individual Marks<<")
console.log(student["marks"]["ENG_123"]);
console.log(student["marks"]["PHY_151"]);
console.log(student["marks"]["MAT_131"]);
console.log(student["marks"]["EEE_121"]);

*/

//JS Object Methods
/*
const  student = {
    firstName: "Bipronath",
    lastName: "Saha", 
    age: 22,
    university: "BSMRSTU",
    
    greet : function(){
        console.log("Hello...")}
};
student.greet();
*/

// Remove Property from Object

const person = {
    name: "Bipronath",
    age: 22,
    laptop:{
        ram:4,
        hd: "1TB",
        brand: "Asus"
        
    }
}
// console.log(person.name);
// console.log(person.age);
//remove property from object 
delete person.laptop;
console.log(person)




