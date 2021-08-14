//JS DOM  (Document object Model)
// DOM Programming Interface
// In the DOM, all HTML elements are defined as objects.

// The programming interface is the properties and methods of each object

// A property is a value that you can get or set (like changing the content of an HTML element)

// A method is an action you can do (like add or deleting an HTML elemenets)

//Find / get element 

//document.getElementById() 
/*
document.getElementById("heading1").innerHTML ='Hello, Bipronath';
document.getElementById("para1").innerHTML ='Hello, Bootstrap';
document.getElementById("demo").innerHTML =' Consectetur ut voluptate incididunt amet veniam esse culpa velit. Tempor sint proident id tempor dolor reprehenderit amet quis proident occaecat cupidatat quis. Adipisicing veniam sint irure fugiat esse excepteur sunt minim qui aute nisi consectetur ex aute. Dolor tempor consequat dolore dolore incididunt. In nostrud in consectetur do ex adipisicing dolore velit aliquip mollit anim enim eu consectetur. Voluptate non exercitation tempor dolore tempor fugiat sint excepteur occaecat. Qui deserunt sint deserunt ut nulla nisi sint tempor ullamco magna proident.'
document.getElementById("demo1").innerHTML =' Id laboris irure eu occaecat voluptate esse non cillum minim eu. Qui qui nulla velit esse pariatur. Nisi proident amet eu sint ad anim ad occaecat reprehenderit quis. Nulla anim culpa anim ullamco incididunt. Voluptate eu labore ullamco ullamco mollit exercitation eu sint eiusmod esse id ex. Non laborum sunt tempor consequat minim irure adipisicing. Amet voluptate tempor non labore dolore et esse reprehenderit. Excepteur proident est ullamco ex do excepteur et anim laborum officia est quis ea. Ipsum aute proident in incididunt cupidatat minim quis amet eu labore. Est eiusmod incididunt et ea quis consectetur ullamco qui id mollit';
*/

//document.getElementsByTagName()
/*
document.getElementsByTagName("p")[0]. innerHTML ="HI";
document.getElementsByTagName("p")[1]. innerHTML ="HI Lorem";
document.getElementsByTagName("h1")[0].innerHTML = "HI Bipro";
*/

//document.getElementsByClassName()
// document.getElementsByClassName("demoPara")[0].innerHTML = "Commodo irure voluptate dolor cupidatat reprehenderit quis. Labore aute irure amet magna anim aute tempor commodo ad reprehenderit anim. Nulla in nulla eu veniam aliqua aliquip veniam aliquip qui ex mollit et officia dolor. Pariatur sit consectetur enim est veniam. In ex adipisicing ad reprehenderit sunt irure adipisicing dolore anim laborum sunt nostrud.Officia eiusmod tempor veniam dolor sint fugiat deserunt aliqua sit quis minim proident. Excepteur id pariatur aliqua laboris anim. Eu deserunt ut consectetur esse minim. Ut aute consequat cillum eiusmod pariatur. Laboris ipsum anim in nisi esse."
// document.getElementsByClassName("paraHead")[0].innerHTML ="Hi"


//More on DOM (Document Object Model)
// Parent Child Siblings relationship in JS
// Creating new HTML Elemets 

var myVar = document.createElement("p");
var txt = document.createTextNode("Do sunt nulla proident in qui est. Ea culpa ad dolor cupidatat enim. Enim voluptate incididunt deserunt laboris cillum minim dolor. Ut sint id cupidatat ullamco non est labore nisi minim. Voluptate nostrud magna cillum veniam incididunt pariatur in magna eiusmod ut magna. Magna duis pariatur eiusmod adipisicing cillum aliqua aute fugiat ad duis. Esse cupidatat ad nulla duis proident voluptate commodo. Ea elit duis laboris qui excepteur magna magna ex id veniam fugiat laborum sunt. Anim amet enim irure Lorem.");

myVar.appendChild(txt);

document.body.appendChild(myVar);

var headingOne = document.createElement("h3");
var headingTxt = document.createTextNode("Lorem Ipsum");

headingOne.appendChild(headingTxt);

document.body.appendChild(headingOne);

//Creating new HTML Elements - insertBefore()

var myNew = document.createElement('p');
var myTxt = document.createTextNode("This is new");

myNew.appendChild(myTxt);

var myFan = document.getElementById("div1");
var child = document.getElementById("p1");

myFan.insertBefore(myNew, child);

var myLink = document.createElement('a');
var myLinkTxt= document.createTextNode("Learn more");
myLink.appendChild(myLinkTxt);

myFan = document.getElementById("div1");
var child1 = document.getElementById("p2");

myFan.insertBefore(myLink,child1);

//Removing HTML Element 
//remove();

document.getElementById("para1").remove();

// Removing Child Node
headingOne.removeChild(headingTxt);
