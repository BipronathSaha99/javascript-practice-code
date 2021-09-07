//Class Inheretance
class Person{
    //parent class 
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating rice`)
    }
   
}

class Student extends Person {
    //sub class
    constructor(name,age,varsity,dept){
        super(name,age);
        this.name = name;
        this.age = age;
        this.varsity = varsity;
        this.dept = dept;
    }
    music(){
        console.log(`${this.name} is listening music`)
    }
}

let stuOne = new Student("Bipronath Saha",23,"BSMRSTU","EEE");
// let stuOne = new Person("Bipronath Saha",23,"BSMRSTU","EEE");

console.log(stuOne);
stuOne.eat();   //parent class function which inhertes from parent class to sub class
stuOne.music();  //child class function
