
//Error Handaling

// try{
//     alert("Hello");
//     alert(x);

// }
// catch(err){
//     console.log(err)
// }

// finally{
//     alert("Good Night")

// }

//Another example of try..catch and finally
//lets check the fibonacci number and during this time it will print the time of it 
/*
let num = parseInt(prompt("Enter the number:"))

let diff, result;

let fib = (n)=>{
    if(n<0 || Math.trunc(n)){
        throw new Error ("must not be negative and must be an integer")
    }
    return fib(n-1)+fib(n-2);
}
let start = Date.now()
try{
    result = fib(num);
}
catch(err){
    result= 0;
}
finally{
    diff = Date.now()-start;
}
alert(result || "error occured")
alert( `execution took ${diff}ms` );
*/

//try statement tests a block of code for errors
//catch statement handles the error 
//finally statement executes the code, after try and catch ,regardless of the result 
//through statement creates custom errors

/* 
//simple example to check error handling in js where it checks the reference error and handle it 

try{
    adddlert("Hello");
}
catch(err){
    console.log(err);
    console.log(err.name);
    console.log("There is " + err.message);
}
finally{
    console.log("Stay home and stay safe during covid-19.")
}
*/

//use error handaling with throw statement
// HTML validation
/*
function add(){

    const message = document.getElementById("01");
    message.innerHTML = ""
    let  x  = document.getElementById("demo").value;

    try{
         if(x == "") throw "empty" ;
         else if (isNaN(x)) throw "Not number";
         x = Number(x);
         if (x>10) throw " larger than 10";
         else throw " too small";
    }

    catch(err){
        message.innerHTML = "Input is " + err;
    }
}
*/