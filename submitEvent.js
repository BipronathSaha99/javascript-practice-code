
//finding Elements 
let form = document.querySelector("form");
let log = document.querySelector("#logTxt");
let name = document.querySelector("div #name");
let email = document.querySelector("div #email");
let password = document.querySelector("div #password");

//add event listenner
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    log.textContent = `Form has been submitted successfully. The time stamp :${e.timeStamp}`;

    const logInfo = {
        name: name.value,
        email:email.value,
        password:password.value,
    };
    console.log(logInfo);
    name.value = "";
    email.value = "";
    password.value = "";
})