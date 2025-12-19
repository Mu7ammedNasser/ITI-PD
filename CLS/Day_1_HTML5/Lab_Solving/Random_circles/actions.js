var canvas = document.getElementById("cir-container");
var drawButton = document.getElementById("draw");
var colorPicker = document.querySelector('input[type="color"]');
var ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < 40; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var radius = Math.random() * 50;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = colorPicker.value;
    ctx.stroke();
  }
}
drawButton.addEventListener("click", drawCircle);