//this keyword in JavaScript
/*
let person ={
    firstName : "Bipronath",
    lastName : "Saha",
    id : 4440,

    fullName : function () {
        
        return this.firstName + " "+this.lastName;
    }
};
console.log(person.fullName());

*/
/*
let laptop1 ={
    CPU : "i5",
    ram : 4 ,
    brand : "Asus",

    getConfig: function() {
        return (this.CPU);
    }
};


let laptop2 ={
    CPU : "i8",
    ram : 4 ,
    brand : "Asus",

    getConfig: function() {
        return (this.CPU);
    }
};
console.log(laptop1.getConfig());
console.log(laptop2.getConfig());
*/

//Object Method Binding
/*
let person ={
    firstName : "Bipronath",
    lastName : "Saha",
    id : 4440,

    fullName : function () {
        
        return this;
    }
};
console.log(person.fullName());
*/

//create object
//create constructor

function Person(name, age, lang, profession) {
    this.name= name,
    this.age=age,
    this.lang = lang,
    this.profession = profession,

    this.showInfo = function name() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.lang);
        console.log(this.profession);

    }
};

let person1 = new Person("Bipronath Saha", 22, ['Bangla','English','Hindi'], 'Student');
let person2 = new Person("Agniraj Saha", 26, ['Bangla','English','Chinease'], 'Serviceman');
let person3 = new Person("Sanatan Saha", 24, ['Bangla','English','Hindi'], 'Unemployed');

person1.showInfo();
person2.showInfo();
person3.showInfo();
