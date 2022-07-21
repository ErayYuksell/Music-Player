const container=document.querySelector(".container");
const image=document.querySelector("#music-image");
const title=document.querySelector(".title");
const singer=document.querySelector(".singer");
const prev=document.querySelector("#prev");
const play=document.querySelector("#play");
const next=document.querySelector("#next");
const duration=document.querySelector("#duration");
const currentTime=document.querySelector("#current-time");
const progressBar=document.querySelector("#progress-bar");

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
 const prevMusic=() =>{
 player.prev();
 let music=player.getMusic();
 displayMusic(music);
 playMusic();
 }
 const nextMusic=() =>{
 player.next();
 let music=player.getMusic();
 displayMusic(music);
 playMusic();
 }

 const pauseMusic=() =>{
    container.classList.remove("playing");
    play.classList=("fa-solid fa-play");
    audio.pause();
}

const playMusic=() =>{
    container.classList.add("playing");
    play.classList=("fa-solid fa-pause");
    audio.play();
}
const calculateTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    const guncellenenSaniye = saniye < 10 ? `0${saniye}`: `${saniye}`;
    const sonuc = `${dakika}:${guncellenenSaniye}`;
    return sonuc;
}
audio.addEventListener("loadedmetadata",() => {
    duration.textContent=calculateTime(audio.duration);
    progressBar.max=Math.floor(audio.duration);
})

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});
progressBar.addEventListener("input",() => {
    currentTime.textContent=calculateTime(progressBar.value);
    audio.currentTime=progressBar.value;
})
