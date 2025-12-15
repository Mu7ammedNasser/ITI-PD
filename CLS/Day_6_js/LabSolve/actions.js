// <!-- 1. Clone HTML div when it is clicked and change the background of the new copy to a
//     random color then append it to the body.  -->

var original = document.getElementsByClassName("cloned")[0];
original.addEventListener("click", function () {
  console.log("hello");
  var clone = original.cloneNode(true);
  clone.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementsByClassName("clone-container")[0].appendChild(clone);
});
