
//BOM- Browser Object Model 
// console.log(window.document)

/*
console.log(`The window inner height is = ${window.innerHeight}px`) // The inner height of the browser window
console.log(`The window inner width is = ${window.innerWidth}px`) // The inner width of the browser window


//The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

console.log(window.location)

console.log(`The herf of the current page is = ${window.location.href}`) //returns the href of the currents page

console.log (`The domain name of the web host = ${window.location.hostname}`) //returns the domain name of the web host 
console.log(`The path of the filename of the current page = ${window.location.pathname}`) // returns the pathname of the file of a current page 
console.log(`The port number is = ${window.location.port}`) //returns the port number

console.log(`The protocol is = ${window.location.protocol}`) // returns the protocol 
// console.log(window.location.assign('https://www.google.com'))
*/

//using dom to print bom 

let locationBom = document.querySelector(".location-bom");

const p1 = locationBom.children[0];
p1.innerHTML = `The herf = ${window.location.href}`; // returns the herf of the current page 
const p2 = locationBom.children[1];
p2.innerHTML = `The host name = ${window.location.hostname}`; // returns the domain name of the web host 
const p3 = locationBom.children[2];
p3.innerHTML = `The port = ${window.location.port}` //returns the port 
const p4 = locationBom.children[3];
p4.innerHTML = `The pathname = ${window.location.pathname}` //returns the pathname 
const p5 = locationBom.children[4];
p5.innerHTML = `The protocol = ${window.location.protocol}` //returns the protocol
const p6 = locationBom.children[5];
p6.innerHTML = `The host = ${window.location.host}` //returns the host i.e hostname:port


const visit_btn = document.getElementById("btn");
visit_btn.addEventListener('click', function(){
    window.location.assign('https://www.w3schools.com/js/js_window_location.asp')
})

const read_btn = document.getElementById("btn2");
read_btn.addEventListener('click', function(){
    window.open('https://www.w3schools.com/js/js_window_location.asp')
}) 


/*window.screen*/
const pScreenOne = document.getElementById("screenOne");
pScreenOne.innerHTML = `The height = ${window.screen.height} px`;

const pScreenTwo = document.getElementById("screenTwo");
pScreenTwo.innerHTML = `The width = ${window.screen.width} px`;

const pScreenThree = document.getElementById("screenThree");
pScreenThree.innerHTML = `The available width = ${window.screen.availWidth} px`;

const pScreenFour = document.getElementById("screenFour");
pScreenFour.innerHTML = `The available height = ${window.screen.availHeight} px`;


const pScreenFive = document.getElementById("screenFive");
pScreenFive.innerHTML = `The color depth = ${window.screen.colorDepth}`;

const pScreenSix = document.getElementById("screenSix");
pScreenSix.innerHTML = `The pixel depth = ${window.screen.pixelDepth}`;


//Popup boxes - alert, prompt, confirm, prompt 

// alert("Hello Bangladesh")
// window.alert("Error handaling ...")

/*
const deleteSome = ()=>{
    let value = confirm("Do you want to delete this?");
    if(value) {
        console.log("Deleted");
    }else{
        console.log("No")
    }
}
deleteSome()
*/
/*
const welcomeSms = () =>{

    var h3 = document.createElement('h3');
    let txt;

    let personeName = prompt("Enter the name: ");
    if(personeName == null || personeName == ''){
        txt = "Not Matched";
        console.log(txt)
    }else{
        txt = `Welcome ${personeName}`;
        console.log(txt)
    }
    var txtNode = document.createTextNode('h3');
    h3.appendChild(txtNode);
    document.body.appendChild('h3');
}
welcomeSms();
*/

//Timing Events 
/*
The two key methods are used in timing events 
a) setTimeout(function,millisecond) b)setinterval(function,millisecond)


*/

// setTimeout(()=>{
//     // console.log("Hello");
// },2000)
// function myFunc(){
//     console.log("Hello World");
// }


let saveInfo = document.querySelector(".save_info");
let message = document.querySelector(".message");

saveInfo.addEventListener("click",display);
function display(){
    message.innerHTML = "Registration successful";

    setTimeout(()=>{
        message.innerHTML = ""
    },2000)
}

let saveCount = document.querySelector(".save_count");
let message1 = document.querySelector(".message1");
let count = 1;
saveCount.addEventListener("click",displaySave);
function displaySave(){
    message1.innerHTML = count; 
    setInterval(() => {
        count++;
        message1.innerHTML= count
    }, 1000);
}