//Destructing
//Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

//array  destructing
// let numbers = [1,2,3,4,5];

//general process
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

//using destructing
// let [a,b,c,...d]=numbers;
// console.log(numbers); 
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//swaping 
// let a = 10, b = 20;
// console.log(`Before swapping the values of the variable: a = ${a} and b = ${b}`);
//swaping by taking temporary vaariable 
// let temp = a;
// a = b;
// b=temp;

// [a,b] = [b,a];

// console.log(`a = ${a} and b = ${b} `);
// console.log(`${a}+${b}=${a+b}`);

//object destructing 
/*
let personInfo ={
    fullName : "Bipronath Saha",
    age : 23,
    varsity : "BSMRSTU", 
    dept : "EEE",
    id : "18ETE046", 
    lang:{
        motherLang: "Bangla",
        secondLang: "English"
    }
};
*/
/*
console.log(personInfo);  // print all the information
console.log(personInfo.fullName); // fetch name 
console.log(personInfo.age);   // fetch age 
console.log(personInfo.varsity); // fetch varsity 
console.log(personInfo.dept); //as well as dept 
console.log(personInfo.id); //id
*/
//using destructing
// const {fullName,age,varsity,lang,...others} = personInfo;
// console.log(fullName);
// console.log(age);
// console.log(varsity);
// console.log(others);
// console.log(lang);

//function 
// let myFun = () =>{
//     console.log(sms);
// }
// let sms = "I am back";
// myFun(sms)

//destructing with function  parameter
let scs = ({id, name}) =>{
    console.log(`${name} has the id no : ${id}`);
}
const personInfo ={
    id :1212,
    name : 'Bipronath'
}
scs(personInfo);