let songidex =0;
let masterplay = document.getElementById('masterplay')
let progressbar = document.getElementById('myprogressbar')
let audioElement =  new Audio('audio1.mp3')
let gif = document.getElementById('gif')
let mastersongname = document.getElementById('mastersongname')
let songitem = Array.from(document.getElementsByClassName('songitem'))




let songs =[ 
    {songname:"let me love you", filePath:"audio0.mp3",CoverPath:"iamges/DJSnakeLetMeLoveYou.jpg"},
    {songname:"I will Be waiting", filePath:"audio2.mp3",CoverPath:"iamges/cover2.jpg"},
    {songname:"Tum Hi Ho", filePath:"audio3.mp3",CoverPath:"iamges/cover3.jpg"},
   

]

songitem.forEach((element, i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath; // Corrected to CoverPath
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname; // Corrected to songname
    
});


masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        // If audio is paused or has not been played before
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.add('fa-pause')
        masterplay.classList.remove('fa-play')
    } else {
        // If audio is playing
        audioElement.pause();
        gif.style.opacity = 0;
        masterplay.classList.remove('fa-pause')
        masterplay.classList.add('fa-play')
       
    }
});
audioElement.addEventListener('timeupdate',()=>{
   let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
   progressbar.value = progress;
})

progressbar.addEventListener("change",()=>{
    audioElement.currentTime = progressbar.value* audioElement.duration/100;
})

const makeallpalay =(element)=>{
    Array.from(document.getElementsByClassName(" songitemplay")).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })

}
Array.from(document.getElementsByClassName(" songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       
        makeallpalay();
        songidex = parseInt(e.target.id)
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src =`audio${songidex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        
       
        



    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songidex >=3){
         songidex=0
        }
    else{
        songidex+= 1;
    }
    audioElement.src =`audio${songidex+1}.mp3`;
    mastersongname.innerText = songs[songidex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause')
        

});

document.getElementById('previous').addEventListener('click', ()=>{
    if(songidex <=0){
         songidex=0
        }
    else{
        songidex-= 1;
    }

    audioElement.src =`audio${songidex+1}.mp3`;
    mastersongname.innerText = songs[songidex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause')
        

});
