const container=document.querySelector(".container");
const image=document.querySelector("#music-image");
const title=document.querySelector(".title");
const singer=document.querySelector(".singer");
const prev=document.querySelector("#prev");
const play=document.querySelector("#play");
const next=document.querySelector("#next");


const player = new MusicPlayer(musicList);
window.addEventListener('load',() => {
    let music=player.getMusic();
    displayMusic(music);
})
 
function displayMusic(music){
    title.innerText=music.title;
    singer.innerText=music.singer;
    image.src="img/" +music.img;
    audio.src="mp3/" +music.file;
}

play.addEventListener('click',() => {
    const isMusicPlay=container.classList.contains("playing");
    if(isMusicPlay){
         pauseMusic();
    }else{
        playMusic();
    }
});
prev.addEventListener('click',() => {
    prevMusic();
})
next.addEventListener('click',() => {
    nextMusic();
})
 function prevMusic(){
 player.prev();
 let music=player.getMusic();
 displayMusic(music);
 playMusic();
 }
 function nextMusic(){
 player.next();
 let music=player.getMusic();
 displayMusic(music);
 playMusic();
 }

function pauseMusic(){
    container.classList.remove("playing");
    play.classList=("fa-solid fa-play");
    audio.pause();
}

function playMusic(){
    container.classList.add("playing");
    play.classList=("fa-solid fa-pause");
    audio.play();
}

