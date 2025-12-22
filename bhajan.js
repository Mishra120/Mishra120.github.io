const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const forwardBtn = document.getElementById('forward');
const rewindBtn = document.getElementById('rewind');
const playlistItems = document.querySelectorAll('#playlist1 ul li');

let currentIndex = 0;

// Add song bars dynamically
playlistItems.forEach(item => {
  const barsContainer = document.createElement('div');
  barsContainer.classList.add('song-bars');
  for (let i=0;i<3;i++){
    const bar = document.createElement('div');
    bar.classList.add('bar');
    barsContainer.appendChild(bar);
  }
  item.appendChild(barsContainer);
});

// Load song
function loadSong(index){
  playlistItems.forEach(item=>{
    item.classList.remove('active');
    item.querySelector('.song-name').classList.remove('active');
    item.querySelectorAll('.bar').forEach(bar=>bar.style.animationPlayState='paused');
  });
  const currentItem = playlistItems[index];
  currentItem.classList.add('active');
  currentItem.querySelector('.song-name').classList.add('active');
  currentItem.querySelectorAll('.bar').forEach(bar=>bar.style.animationPlayState='running');
  audio.src = currentItem.dataset.src;
}

// Controls
playBtn.addEventListener('click',()=>audio.play());
pauseBtn.addEventListener('click',()=>audio.pause());
nextBtn.addEventListener('click',()=>{
  currentIndex=(currentIndex+1)%playlistItems.length;
  loadSong(currentIndex);
  audio.play();
});
prevBtn.addEventListener('click',()=>{
  currentIndex=(currentIndex-1+playlistItems.length)%playlistItems.length;
  loadSong(currentIndex);
  audio.play();
});
forwardBtn.addEventListener('click',()=>audio.currentTime+=10);
rewindBtn.addEventListener('click',()=>audio.currentTime-=10);

// Click on song to play
playlistItems.forEach((item,index)=>{
  item.addEventListener('click',()=>{
    currentIndex=index;
    loadSong(currentIndex);
    audio.play();
  });
});

// Initialize
loadSong(currentIndex);
