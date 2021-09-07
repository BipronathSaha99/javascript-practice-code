class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    
    set Myname(name){
        this.name = name;
    }
    get Myread(){
        return `${this.name} is ${this.age} years old`;
    }
    

    static issame(person1, person2){
        // if(student1.age === student2.age){}
        return person1.age === person2.age;

    }
} 
class Student extends Person{
    constructor(name,age,id,dept){
        super(name,age);
        this.name = name;
        this.age = age; 
        this.id = id;
        this.dept = dept;
    }
    
    eat(){
        super.eat();
        console.log(`${this.name} is eating rice.`)
    }

}



var personOne = new Student("Bipronath Saha",23);
// var personOne = new Person("Bipronath Saha",23);

personOne.Myname = "Bipro"
// console.log(personOne);
// console.log(personOne.name);    //setter  
console.log(personOne.Myread) //getter and setter 

personOne.eat();


var personOne = new Student("Bipronath Saha",23);
var personTwo = new Student("Tanmoy Sarker",24);

console.log(Person.issame(personOne, personTwo));
