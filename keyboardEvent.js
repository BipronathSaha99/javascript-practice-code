/*
KeyboardEvent objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard. The event type (keydown, keypress, or keyup) identifies what kind of keyboard activity occurred. 
*/

window.addEventListener("keypress", checkProperty, false);
function checkProperty(event){
    if(event.keyCode == "65"){
        alert("You have pressed = 'A' ")
    }
    else if (event.keyCode == "97"){
        alert("You have pressed 'a'")
    }
}