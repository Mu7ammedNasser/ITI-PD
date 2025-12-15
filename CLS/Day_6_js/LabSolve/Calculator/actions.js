document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    const value = e.target.getAttribute("data-value");
    const display = document.getElementById("display");
    if (value === "=") {
      try {
        if (display.innerText !== "")
          var valuetoDisplay = (display.innerText = eval(display.innerText));
        if (valuetoDisplay == "Infinity" || valuetoDisplay == "-Infinity") {
          display.innerText = "Error";
        }

      } catch {
        display.innerText = "Error";
      }
    } else if (value === "C") {
      display.innerText = "";
    } else {
      display.innerText += value;
    }
  }
});
