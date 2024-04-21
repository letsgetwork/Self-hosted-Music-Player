const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const coverImage = document.getElementById('coverImage');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const progressBar = document.getElementById('progressBar');
const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');

let isPlaying = false; // Track whether the audio is currently playing
let currentTime = 0; // Track the current playback time

let currentSongIndex = 0; // Track the index of the current song

// Function to format time in MM:SS format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Function to play or pause the audio
function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  playPauseButton.src = isPlaying ? '/asset/pause.png' : '/asset/play.png';
}

// Event listeners for play, pause, previous, and next buttons
playPauseButton.addEventListener('click', togglePlayPause);
prevButton.addEventListener('click', playPreviousSong);
nextButton.addEventListener('click', playNextSong);

// Create audio element
const audio = new Audio();
audio.addEventListener('loadedmetadata', () => {
  endTime.textContent = formatTime(audio.duration);
});

// Event listener for updating progress bar
audio.addEventListener('timeupdate', () => {
  currentTime = Math.floor(audio.currentTime);
  progressBar.value = (currentTime / audio.duration) * 100;
  startTime.textContent = formatTime(currentTime);
});

// Event listener for when the song ends
audio.addEventListener('ended', playNextSong);

// Event listener for when the progress bar value changes
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
  startTime.textContent = formatTime(seekTime);
});

// Function to play the previous song
function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadCurrentSong();
}

// Function to play the next song
function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadCurrentSong();
}

// Function to load the current song
function loadCurrentSong() {
  const currentSong = playlist[currentSongIndex];
  audio.src = currentSong.audio;
  coverImage.src = currentSong.cover;
  songTitle.textContent = currentSong.title;
  artistName.textContent = currentSong.artist;
  document.title = `${currentSong.artist} - ${currentSong.title}`; // Update browser title
  audio.play();
  isPlaying = true;
  playPauseButton.src = '/asset/pause.png';
  audio.addEventListener('loadedmetadata', () => {
    endTime.textContent = formatTime(audio.duration);
  });
}

// Shuffle function to shuffle the playlist
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Function to load and play a random song from the shuffled playlist
function loadAndPlayRandomSong() {
  // Shuffle the playlist
  const shuffledPlaylist = shuffle([...playlist]);
  // Play the first song from the shuffled playlist
  currentSongIndex = 0;
  loadCurrentSong();
}

// Call the function to load and play a random song when the page first loads
loadAndPlayRandomSong();