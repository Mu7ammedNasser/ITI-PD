var red = document.querySelector(".red");
var green = document.querySelector(".green");
var yellow = document.querySelector(".yellow");
// console.log(red);
// console.log(green);
// console.log(yellow);


red.addEventListener("click", function (e) {
    if (e.target === this) {
        alert("iam red")
    }
})

green.addEventListener("click", function (e) {
    // if (e.target === this) {
    //     alert("iam green")
    // }
    e.stopPropagation();
    alert("iam green")


})

yellow.addEventListener("click", function (e) {
    // if (e.target === this) {
    //     alert("iam yellow")
    // }

    e.stopPropagation();
    alert("iam yellow")
})