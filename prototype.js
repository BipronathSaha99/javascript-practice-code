//prototype Inheretance 

/*
A prototype-based language?

JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.

*/
//inheretance 


function Person (name,age) { //parent class
    this.name=name;
    this.age = age;
}
function Student (name,age,varsity,dept){
    //sub class
    Person.call(this);
    this.name = name;
    this.age = age;
    this.varsity = varsity;
    this.dept = dept;
}

Person.prototype={
    eat:function(){
        console.log(`${this.name} is eating.`)   
    },
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.music = function (){
        console.log(`${this.name} is listening music`);
}

let stuOne = new Student("Bipronath Saha",23,"BSMRSTU","EEE");
// let stuOne = new Person("Bipronath Saha",23,"BSMRSTU","EEE");

console.log(stuOne);

stuOne.eat();
console.log(stuOne.music())

/*  
//Printing the number 

function Calculator(numOne,numTwo){
    //parent class 
    this.numOne = numOne;
    this.numTwo = numTwo;
}

function Sum(numOne,numTwo,numThree,numFour){
    //sub class
    Calculator.call(this);
    this.numOne = numOne;
    this.numTwo = numTwo;
    this.numThree = numThree;
    this.numFour = numFour;
}

Sum.prototype = Object.create(Calculator.prototype);
Sum.prototype.constructor = Sum;

let sumOne = new Sum(10,20,30,40);
// let sumOne = new Calculator(10,20,30,40);

console.log(sumOne);
*/