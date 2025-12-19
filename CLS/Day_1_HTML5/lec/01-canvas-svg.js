var canvas = document.querySelector("canvas");
console.log(canvas);

var ctx = canvas.getContext("2d")
console.log(ctx);

// set fill color to red
ctx.fillStyle = "red"

// draw rectangle at(50,50) with width = 100 , and height = 150
ctx.fillRect(50, 50, 100, 150);
ctx.fillRect(150, 200, 100, 100);



ctx.moveTo(200, 50);  //moving to start point
ctx.lineTo(250, 150); //draw line to this point
// ctx.lineTo(350, 70);
ctx.stroke();  //actually draw that line


// start new path
ctx.beginPath();
