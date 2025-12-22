const audio = document.getElementById("audio");
const songs = document.querySelectorAll("#playlist li");

let currentIndex = 0;

function loadSong(index){
  songs.forEach(s => s.classList.remove("active"));
  songs[index].classList.add("active");
  audio.src = songs[index].dataset.src;
  audio.play();
}

songs.forEach((song, index)=>{
  song.addEventListener("click", ()=>{
    currentIndex = index;
    loadSong(currentIndex);
  });
});

function playSong(){ audio.play(); }
function pauseSong(){ audio.pause(); }

function nextSong(){
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
}

function prevSong(){
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
}

function seek(sec){
  audio.currentTime += sec;
}

audio.addEventListener("ended", nextSong);

loadSong(0);
