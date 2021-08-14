//Image Slider 

//Initialize variables 
let photos = ['assets/image1.jpeg','assets/image2.jpeg','assets/image3.jpeg'];
let myImg = document.querySelector("img");
let count = 0;

// function for next button 
function next() {
    count++;
    if(count>=photos.length){
        count = 0;
        myImg.src = photos[count];
    }
    else{
        myImg.src = photos[count];
    }
}
//function for previous button 
function prev() {
    count--;
    if(count< 0){
        count = photos.length-1;
        myImg.src = photos[count];
    }
    else{
        myImg.src = photos[count];
    }
}
