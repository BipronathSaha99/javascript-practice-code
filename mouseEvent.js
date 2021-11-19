//function to find mouseover event 

//mouseover event
function bigImg(x){
    x.style.width = "650px";
    x.style.height = "180px";
}

//mouseout event
function normalImg(x){
    x.style.width = "450px";
    x.style.height = "170px";
}

//mouseup event 
function takemouse(){
    document.querySelector("#paraOne").innerHTML = "Bangladesh is my homeland. Bangladesh is very nice country."
}

//mousedown event 
function takemousedown(){
    document.querySelector("#paraOne").innerHTML = "Bangladesh is riverine country"
}

//mouseseenter event 
function mouseSeent(){
    document.querySelector("#paraTwo").style.color = "red";
}

//mouslave event 
function mouseLeave(){
    document.querySelector("#paraTwo").style.color = "black";
}

