var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("play");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var coverDiv = document.querySelector(".cover");
var progessBar = document.getElementById("progress");
var volumeCtrl = document.getElementById("volume");

index = 0;
var arrOfSongs = [
  "./audios/mario.mp3",
  "./audios/cancion-de-amor.mp3",
  "./audios/road-of-deception.mp3",
];

var arrOfImgs = ["./mario.jpg", "./mario2.jpg", "./mario3.png"];
audio.src = arrOfSongs[index];
coverDiv.style.backgroundImage = `url(${arrOfImgs[index]})`;

function start() {
  if (audio.paused) {
    audio.play();
    this.classList.replace("fa-play", "fa-pause");
  } else {
    audio.pause();
    this.classList.replace("fa-pause", "fa-play");
  }
}
playPauseBtn.addEventListener("click", start);

function next() {
  if (index >= arrOfSongs.length - 1) {
    nextBtn.classList.add("dark");
    return;
  }

  index++;
  prevBtn.classList.remove("dark");
  nextBtn.classList.remove("dark");
  audio.src = arrOfSongs[index];
  coverDiv.style.backgroundImage = `url(${arrOfImgs[index]})`;
  audio.play();
  playPauseBtn.classList.replace("fa-play", "fa-pause");
}

nextBtn.addEventListener("click", next);
function prev() {
  nextBtn.classList.remove("dark");
  index--;
  if (index < 0) {
    prevBtn.classList.add("dark");
    return;
  }
  prevBtn.classList.remove("dark");
  audio.src = arrOfSongs[index];
  coverDiv.style.backgroundImage = `url(${arrOfImgs[index]})`;
  audio.play();
  playPauseBtn.classList.replace("fa-play", "fa-pause");
}
prevBtn.addEventListener("click", prev);

audio.addEventListener("timeupdate", function () {
  var progress = parseInt((audio.currentTime / audio.duration) * 100);
  progessBar.value = progress;
});

volumeCtrl.addEventListener("input", function () {
  audio.volume = volumeCtrl.value / 100;
});
