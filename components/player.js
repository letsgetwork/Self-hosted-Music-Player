const playPauseButton = document.getElementById('playPauseButton');
const shuffleButton = document.getElementById('shuffleButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const coverImage = document.getElementById('coverImage');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const progressBar = document.getElementById('progressBar');
const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');

let isPlaying = true;
let isShuffleOn = false;
let currentTime = 0;
let currentSongIndex = 0;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  playPauseButton.src = isPlaying ? '/asset/pause.png' : '/asset/play.png';
}

function toggleShuffleOnOff() {
  isShuffleOn = !isShuffleOn;
  shuffleButton.src = isShuffleOn ? '/asset/shuffleon.png' : '/asset/shuffleoff.png';
}

playPauseButton.addEventListener('click', togglePlayPause);
shuffleButton.addEventListener('click', toggleShuffleOnOff);
prevButton.addEventListener('click', playPreviousSong);
nextButton.addEventListener('click', playNextSong);

const audio = new Audio();
audio.addEventListener('loadedmetadata', () => {
  endTime.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  currentTime = Math.floor(audio.currentTime);
  progressBar.value = (currentTime / audio.duration) * 100;
  startTime.textContent = formatTime(currentTime);
});

audio.addEventListener('ended', () => {
  if (isShuffleOn) {
    loadAndPlayRandomSong();
  } else {
    playNextSong();
  }
});

progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
  startTime.textContent = formatTime(seekTime);
});

function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadCurrentSong();
}

function playNextSong() {
  if (isShuffleOn) {
    currentSongIndex = getRandomIndex();
  } else {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
  }
  loadCurrentSong();
}

function getRandomIndex() {
  let newIndex = currentSongIndex;
  while (newIndex === currentSongIndex) {
    newIndex = Math.floor(Math.random() * playlist.length);
  }
  return newIndex;
}

function loadCurrentSong() {
  const currentSong = playlist[currentSongIndex];
  audio.src = currentSong.audio;
  coverImage.src = currentSong.cover;
  songTitle.textContent = currentSong.title;
  artistName.textContent = currentSong.artist;
  document.title = `${currentSong.artist} - ${currentSong.title}`;
  audio.play();
  isPlaying = true;
  playPauseButton.src = '/asset/pause.png';
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function loadAndPlayRandomSong() {
  const shuffledPlaylist = shuffle([...playlist]);
  currentSongIndex = 0;
  loadCurrentSong();
}

loadAndPlayRandomSong();
