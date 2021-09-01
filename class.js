/*
JavaScript Class  Syntax 

Use the keyword class to create a class.
Always add a method named constructor():
*/

class personInfo{
    constructor(name,age){
        this.name=name;
        this.age =age;
    }
    set personName(name){
        this.name = name;
    } 
    get personInfo(){
        return this.name + " is " + this.age + " years old";
    }

}
let personOne = new personInfo("Bipronath Saha",23);
let personTwo = new personInfo("BS",24);

// personOne.personName = "Bkash";

console.log(`${personOne.name} is ${personOne.age} old`);
console.log(`${personTwo.name} is ${personTwo.age} old`);
console.log(personOne.personInfo);


/*===========================================================
            calculating
===========================================================*/

class calculator{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    set calOp(a){
        this.a = a;
    }
}

let add = new calculator(10,20);
let sub = new calculator(5,10);

// add.calOp = 5;

console.log(`${add.a} + ${add.b} = ${add.a + add.b}`);
console.log(`${sub.a} - ${sub.b} = ${sub.a - sub.b}`);
