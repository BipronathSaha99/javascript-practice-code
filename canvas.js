
//canvas 

let c =  document.querySelector("#mycanvas");
let ctxt = c.getContext("2d");




//stroke
ctxt.lineWidth = 3;
ctxt.strokeStyle = "black";
ctxt.strokeRect(10,10,380,280);




//fill 
ctxt.fillStyle = "green";
ctxt.fillRect(12,12,376,276);
ctxt.stroke();




//circle 
let centerX = c.width/2;
let centerY = c.height/2;

ctxt.beginPath();
ctxt.arc(centerX,centerY,80,0,2*Math.PI, false);
ctxt.fillStyle = "red";
ctxt.fill();
ctxt.stroke();



//StrokeText
ctxt.font = " 30px Gorgia";
ctxt.strokeText("Bangladesh",10, 50);

