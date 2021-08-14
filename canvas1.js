
//canvas 

let c =  document.querySelector("#mycanvas");
let ctxt = c.getContext("2d");




//stroke

//circle 
let centerX = c.width/2;
let centerY = c.height/2;

ctxt.beginPath();
ctxt.arc(centerX,centerY,80,0,2*Math.PI, false);
ctxt.fillStyle = "white";
ctxt.fill();
ctxt.stroke();


let centerX1 = c.centerX/2;
let ceneterY1 = c.centerY/2;

ctxt.beginPath();
ctxt.arc(centerX,centerY,10,0,2*Math.PI, false);
ctxt.fillStyle = "black";
ctxt.fill();
ctxt.stroke();

let centerX2 = c.centerX/2;
let ceneterY2 = c.centerY/2;


ctxt.beginPath();
ctxt.arc(centerX,centerY,10,0,2*Math.PI, false);
ctxt.fillStyle = "black";
ctxt.fill();
ctxt.stroke();