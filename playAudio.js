

var len = document.querySelectorAll(".myBtn").length;

for(var i = 0; i<=len ; i++){
    document.querySelectorAll(".myBtn")[i].addEventListener('click', function mymusic(){
        var text = this.innerHTML;
        console.log(text);

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