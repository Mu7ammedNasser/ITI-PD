var arr = [
  "./assets/1.jpg",
  "./assets/2.jpg",
  "./assets/3.jpg",
  "./assets/4.jpg",
  "./assets/5.jpg",
  "./assets/6.jpg",
];
var currentIndex = 0;
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var slideShow = document.querySelector(".slide-show");
var stop = document.querySelector(".stop");

var currentImage = document.querySelector(".slide-content");

prev.addEventListener("click", function () {
  console.log(currentIndex);

  if (currentIndex !== 0) {
    currentIndex--;
    currentImage.setAttribute("src", arr[currentIndex]);
  }
});

next.addEventListener("click", function () {
  console.log(currentIndex);
  if (currentIndex !== arr.length - 1) {
    currentIndex++;
    currentImage.setAttribute("src", arr[currentIndex]);
  }
});

slideShow.addEventListener("click", function () {
  console.log(currentIndex);
  console.log("stop");
  timer = setInterval(function () {
    currentImage.setAttribute("src", arr[currentIndex++]);
    if (currentIndex == arr.length ) currentIndex = 0;
  }, 1000);
});

stop.addEventListener("click", function () {
  console.log(currentIndex);
  console.log("stop");
  clearInterval(timer);
});
