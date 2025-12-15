var header = document.getElementById("header");

header.style.position = "absolute";
header.style.right = "0";

var newDiv = document.createElement("div");
newDiv.id = "newDiv";
newDiv.style.width = "400px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "lightblue";
document.body.appendChild(newDiv);

newDiv.innerHTML = `<img src="./d7d9ea05-c6b7-4f79-946d-8a0058d7926f.jfif"/>`;

newDiv.style.position = "absolute";
newDiv.style.bottom = "0";
newDiv.style.left = "0";

var ul = document.querySelector(".navigation");
ul.style.textAlign = "center";
ul.style.width="fit-content";
ul.style.margin="0 auto";
ul.style.padding="300px 0 0 0 ";
