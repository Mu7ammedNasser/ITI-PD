let selectedGender = null;

function selectGender(gender) {
  selectedGender = gender;

  document.getElementById("male").classList.remove("selected");
  document.getElementById("female").classList.remove("selected");

  document.getElementById(gender).classList.add("selected");
}

function register() {
  const nameInput = document.getElementById("name");
  const colorSelect = document.getElementById("color");

  const name = nameInput.value.trim();
  const color = colorSelect.value;

  if (name === "" || selectedGender === null) {
    alert("Please enter your name and select gender");
    return;
  }

  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 1);

  cookieLib.setCookie("username", name, expiry);
  cookieLib.setCookie("color", color, expiry);
  cookieLib.setCookie("gender", selectedGender, expiry);
  cookieLib.setCookie("visits", 0, expiry);

  window.location.assign("profile.html");
}
