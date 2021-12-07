
//audio / video  
// canplay,play,playing, ended,progress,volumechange,waiting

//finding elements 

/* audio  */
const audio = document.querySelector(".audio audio");
audio.addEventListener("canplay",()=>{
    console.log("canplay")
})

audio.addEventListener("play",()=>{
    console.log("play")
})

audio.addEventListener("playing",()=>{
    console.log("playing")
})

audio.addEventListener("pause",()=>{
    console.log("paused")
})

audio.addEventListener("ended",()=>{
    console.log("ended")
})

/* video */

const video = document.querySelector("#videoDiv video");

video.addEventListener("canplay",()=>{
    console.log("Video canplay");
})

video.addEventListener("play",()=>{
    console.log("Video plays");
})

video.addEventListener("playing",()=>{
    console.log("Video is playing");
})

video.addEventListener("pause",()=>{
    console.log("Video is paused");
})

