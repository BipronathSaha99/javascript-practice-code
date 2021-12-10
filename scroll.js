
//Scroll Event 

//finding element 
let scText = document.querySelector("#scText");

scText.addEventListener('scroll', ()=>{
    demo.textContent = "this div contains some texts."
})



window.onscroll = function(){myScroll()};
function myScroll(){
    if(document.body.scrollTop >50 || document.documentElement.scrollTop > 50){
        document.getElementById("demonTwo").className = "test";
    }else{
        document.getElementById("demonTwo").className = "testTwo";
    }
}
//scrollTo
const scrollWin = () =>{
    window.scrollTo(300,500);
}