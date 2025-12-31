$(document).ready(function () {
  $("#btn-blue").click(function () {
    $("#main-heading").css("color", "blue");
  });
  $("#btn-red").click(function () {
    $("#main-heading").css("color", "red");
  });
  $("#btn-green").click(function () {
    $("#main-heading").css("color", "green");
  });

  $("#btn-magic").click(function () {
    $("#magic-box").toggleClass("rainbow");
  });

  $("#btn-secret").click(function () {
    $("#secret-message").fadeToggle();
  });

  var counter = 0;
  $("#btn-counter").click(function(){
    counter++;
    $("#counter-value").text(counter);
  });
});
