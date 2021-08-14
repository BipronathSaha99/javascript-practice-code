//alert () method

// alert("Hello World!"); 

// prompt()

let name= prompt("Enter your name:");
console.log(name);

//confirm ()
let txt;
let r = confirm("Are you sure?");

if (r == true){
    txt = "you are perfect";
    console.log(txt);
}
else{
    txt = "you aren't perfect";
    console.log(txt);
}

