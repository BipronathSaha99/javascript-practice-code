//String Data Type
//A JS string is a zero or more than a character within a quote
// The quote can be single or double
// var strValue="Volvo Car"; console.log(strValue); // the string started with double quote

// var strValue1='Hero Honda'; console.log(strValue1); //the string started with single quote 


//It's possible to use quotes inside a string, as long as they don't match the quotes surrounding the string:
// let theVal="My name's Bipronath Saha"; console.log(theVal); //this is the one way to show 

// //the another but the old process of working 
// theVal='My name\'s Bipronath Saha'; console.log(theVal);


//Escape characters
/*

\* =  ' : single quote
\" = " :double quote

\\ = \  : backslash

\b : backspace 
\n : new line
\f : form need
\t: horizental tabulator
\v: vertical tabulator 


*/

// let valOne= "My name is Bipronath Saha";
// console.log(valOne);

// valOne="My name\'s Bipronath Saha";
// console.log(valOne);

// valOne= "Lorem ipsum Cum sociis natoqu ultricies nec, \"pellentesque\" lorem";
// console.log(valOne); // use of \" or double quote

// valOne= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean \commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,"
// console.log(valOne);

// valOne="Lorem ipsum dolor sit amet, consectetuer adipi\nscing elit";
// console.log(valOne);


// valOne="Lorem ipsum dolor sit amet, conse\b ctetuer adipiscing elit";
// console.log(valOne);


// valOne="Lorem ipsum dolor sit amet, consect\tetuer adipinscing elit";
// console.log(valOne);

// valOne="Lorem ipsum dolor sit amet, con\vsectetuer adipinscing elit";
// console.log(valOne);

// string can be object 
// Normally JS strings are primitive values, created from literal
//var theEx="Bipronath Saha";
// But JS string can be object by using a keyword new 
// var theEx= new String("Bipronath")

// let theEx="Bipronath Saha"; 
// let theEx1=new String("Bipronath Saha");

// console.log( theEx);
// console.log( theEx1);

// console.log(typeof theEx);
// console.log(typeof theEx1);

// console.log(theEx==theEx1);//true
// console.log(theEx===theEx1);// false
//using the === operator, equal values may not be equal, because the === operator expects equality in both data type and value.

/*=================================================
                JS Methods
==================================================*/

//Sting length: using built-in length property we can find the length of the string

let theVal1="Bipronath Saha"
console.log(theVal1.length);

//Finding a string in a string 
//The indexof() method returns the positon of the first occurence of a specifide text in a string
console.log(theVal1.indexOf("Bipronath"));

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
theVal2="Bipronath Saha Lorem Ipsum Doller Ammet Saha"
console.log(theVal2.lastIndexOf("Saha"));

//Both indexOf(), and lastIndexOf() return -1 if the text is not found.
console.log(theVal1.indexOf("Nath"));
console.log(theVal2.indexOf("Nath"));

//searching for a string in a string
console.log(theVal1.search("Saha"))
//The search() method searches a string for a specified value and returns the position of the match:


/*
Difference between indexOf() and search():

common in both :
1) both return the first occurence of the searched value
2) both return -1 if no match found 

//Ex: let str="Book is the best friend for us."
//str.indexOf("b");  //return the position 12
//str.search("b"); //return the position 12


special in indexOf():
it can take second start position argument
let str="Book is the best friend for us."
str.indexOf("b",12)


special in search():
it can return the regex

*/

//String Concatanetion 
let text1="hello",text2="world";
// let res= text1+" "+text2;
// console.log(res);

let textOne="My name is", textTwo="Bipronath",textThree="Saha";
// let result= textOne+ " "+ textTwo+" "+textThree;
// console.log(result)

// concat () method is used instead of + 
let res=text1.concat(" ", text2);
console.log(res);

let result= textOne.concat(" ",textTwo).concat(" ", textThree);
console.log(result);

let fName="Bipronath";
let lName="Saha";
let restPart= "is my name.";
let show=fName.concat(" ",lName).concat(" ", restPart);
console.log(show);

// Converting upper and lower
// using toUpperCase() a string can convert lower to upper

let valueOne="bipronath saha ";
console.log(valueOne.toUpperCase());

//using toLowerCase() a string can convert upper to lower 

let valueTwo="Bipronath Saha";  
console.log(valueTwo.toLowerCase());

//Replacing String Content 

// using replace() a string content can be replaced and it'll be a new string

var theValueOne="Dhaka is the capital of Bangladesh";
var resOne=theValueOne.replace("Dhaka","Khulna");

console.log(resOne);
console.log(theValueOne);

/*
Extracting String 

There are 3 methods of extracting part of a string:
1)slice(start, end):slice() extracts a part of a string and returns the extracted part in a new string

2) substring(start, end): similar to slice(start,end) but difference is that substring() cannot accept negative indexes
3) substr(start, length) : similar to substr but difference is that substr can accept the length in the end section




*/
let guessOne="Apple, Jackfuit, Guava";
let guessResult=guessOne.slice(7,15);
guessResult=guessOne.slice(-15,-6);

console.log(guessOne);
console.log(guessResult);

let guessRes=guessOne.substring(7,15);
console.log(guessRes);

let guessRes1=guessOne.substr(7,8); //substr(start,length)
console.log(guessRes1);  

//JS Trim() method
//Trim() method can remove the white spaces 
let theValueGr="  Hello World! " ;

console.log(theValueGr.trim());

theValueGr="        Bangladesh is the riverine country.         "
console.log(theValueGr.trim().toUpperCase());

//trim() method can not support IE-v8 or lower 

//Extracting String Character 
// charAt(position): it returns the character at a specified index in a string 
//charCodeAt(position): it returns the unicode value at a specified index in a string

var theGrVal="Bipronath Saha";
//charAt()
console.log(theGrVal.charAt(0));
console.log(theGrVal.charAt(1));
console.log(theGrVal.charAt(2));
console.log(theGrVal.charAt(3));
console.log(theGrVal.charAt(4));
console.log(theGrVal.charAt(5));
console.log(theGrVal.charAt(6));
console.log(theGrVal.charAt(7));
console.log(theGrVal.charAt(8));
console.log(theGrVal.charAt(9));
console.log(theGrVal.charAt(10));
console.log(theGrVal.charAt(11));
console.log(theGrVal.charAt(12));
console.log(theGrVal.charAt(13));

//charCodeAt()
console.log(theGrVal.charCodeAt(0));
console.log(theGrVal.charCodeAt(4));
console.log(theGrVal.charCodeAt(7));
console.log(theGrVal.charCodeAt(10));
console.log(theGrVal.charCodeAt(11));
console.log(theGrVal.charCodeAt(12));
console.log(theGrVal.charCodeAt(13));


