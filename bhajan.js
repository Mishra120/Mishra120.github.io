const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const forwardBtn = document.getElementById('forward');
const rewindBtn = document.getElementById('rewind');
const playlistItems = document.querySelectorAll('#playlist1 ul li');

let currentIndex = 0;

// Function to load a song
function loadSong(index) {
  playlistItems.forEach(item => item.classList.remove('active'));
  playlistItems[index].classList.add('active');
  audio.src = playlistItems[index].dataset.src;
}

// Play song
playBtn.addEventListener('click', () => {
  audio.play();
});

// Pause song
pauseBtn.addEventListener('click', () => {
  audio.pause();
});

// Next song
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % playlistItems.length;
  loadSong(currentIndex);
  audio.play();
});

// Previous song
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + playlistItems.length) % playlistItems.length;
  loadSong(currentIndex);
  audio.play();
});

// Forward 10 seconds
forwardBtn.addEventListener('click', () => {
  audio.currentTime += 10;
});

// Rewind 10 seconds
rewindBtn.addEventListener('click', () => {
  audio.currentTime -= 10;
});

// Click on song to play
playlistItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    loadSong(currentIndex);
    audio.play();
  });
});

// Load first song initially
loadSong(currentIndex);
