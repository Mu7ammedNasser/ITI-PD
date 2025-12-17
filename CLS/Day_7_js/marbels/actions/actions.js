var marbles = document.querySelectorAll(".mar-content img");

var index = 0;

marbles[0].src = "./assets/marble2.jpg";
marbles[0].classList.add("active");

timer = setInterval(function () {
  marbles[index].src = "./assets/marble1.jpg";
  index++;
  if (index == marbles.length) index = 0;
  marbles[index].src = "./assets/marble2.jpg";
  marbles[index].classList.toggle("active");
}, 1000);

marbles.forEach((marble) => {
  marble.addEventListener("mouseenter", function () {
    clearInterval(timer);
  });

  marble.addEventListener("mouseout", function () {
    timer = setInterval(function () {
      marbles[index].src = "./assets/marble1.jpg";
      index++;
      if (index == marbles.length) index = 0;
      marbles[index].src = "./assets/marble2.jpg";
    }, 1000);
  });
});
