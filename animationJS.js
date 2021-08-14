//play audio

var len = document.querySelectorAll(".myBtn").length;

for(var i = 0; i<=len ; i++){
    document.querySelectorAll(".myBtn")[i].addEventListener('click',  function play(){
        var text = this.innerHTML ;
        console.log(text);

        playAnimation(text);

        switch(text){
            case 'a':
                var audio = new Audio('/sounds/song1.mp3');
                audio.play();
                break;

            case 'b':
                var audio = new Audio('/sounds/song2.mp3');
                audio.play();
                break;

            case 'b':
                var audio = new Audio('/sounds/song3.mp3');
                audio.play();
                break;
        }
});

}
function playAnimation(text){
    var anim = document.querySelector("."+text);
    anim.classList.add("animation");
}

setTimeout(function(){
    var animRemove = document.querySelector("."+text);
    animRemove.classList.remove("animation");
},1000)