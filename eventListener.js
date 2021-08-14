// Event Listener 
//addEventListener()


var myBtn = document.querySelector("button");
var head = document.querySelector("h3");
//create Element and text
var para = document.createElement("p");
var paraTxt = document.createTextNode("This is a text");

myBtn.addEventListener('click', (event)=>{
    para.appendChild(paraTxt);
    document.body.appendChild(para);
})

head.addEventListener('mouseover', (myevent)=>{
    head.classList.add("head3")
})

head.addEventListener('mouseout', (myevent)=>{
    head.classList.remove("head3")
})

// Event Listener with multiple elements 
/*
document.querySelectorAll(".mybutton")[0].addEventListener('click', function () {
    var text = this.innerHTML;
    document.querySelector("h2").innerHTML = text + " is clicked";
});

document.querySelectorAll(".mybutton")[1].addEventListener('click', function () {
    var text = this.innerHTML;
    document.querySelector("h2").innerHTML = text + " is clicked";
});

document.querySelectorAll(".mybutton")[2].addEventListener('click', function () {
    var text = this.innerHTML;
    document.querySelector("h2").innerHTML = text + " is clicked";
});

document.querySelectorAll(".mybutton")[3].addEventListener('click', function () {
    var text = this.innerHTML;
    document.querySelector("h2").innerHTML = text + " is clicked";
});

document.querySelectorAll(".mybutton")[4].addEventListener('click', function () {
    var text = this.innerHTML;
    document.querySelector("h2").innerHTML = text + " is clicked";
});
*/
var len = document.querySelectorAll(".mybutton").length ;
for(var i = 0; i<=len; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener('click', function () {
        var text = this.innerHTML;
        document.querySelector("h2").innerHTML = text + " is clicked";
    });
}
