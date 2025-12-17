var form = document.getElementById("myForm");

//inpurs
var uName = document.querySelector(".name");
var uAge = document.querySelector(".age");
var uEmail = document.querySelector(".email");

//clear
var clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  form.reset();
  emailError.classList.remove("alert");
  ageError.classList.remove("alert");
  nameError.classList.remove("alert");
});

//cartona
var contnet = document.querySelector(".data");

//arr from local storage
var formArr = JSON.parse(localStorage.getItem("data")) || [];

//Error tag
var nameError = document.querySelector(".userName");
var ageError = document.querySelector(".userAge");
var emailError = document.querySelector(".userEmail");

//Regex
var nameRegex = /^[A-Za-z ]{3,}$/;
var ageRegex = /^(1[89]|[2-9]\d)$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//validate functions
function nameValidate() {
  if (!nameRegex.test(uName.value)) {
    nameError.classList.add("alert");
    return false;
  }
  nameError.classList.remove("alert");
  return true;
}

function ageValidate() {
  if (!ageRegex.test(uAge.value)) {
    ageError.classList.add("alert");
    return false;
  }
  ageError.classList.remove("alert");
  return true;
}

function emailValidate() {
  if (!emailRegex.test(uEmail.value)) {
    emailError.classList.add("alert");
    return false;
  }
  emailError.classList.remove("alert");
  return true;
}

uName.addEventListener("blur", nameValidate);
uAge.addEventListener("blur", ageValidate);
uEmail.addEventListener("blur", emailValidate);

form.onsubmit = function (event) {
  event.preventDefault();

  if (!(nameValidate() | ageValidate() | emailValidate())) {
    emailError.classList.add("alert");
    return;
  }

  if (!nameValidate()) {
    nameError.classList.add("alert");
    return;
  }
  if (!ageValidate()) {
    ageError.classList.add("alert");
    return;
  }
  if (!emailValidate()) {
    emailError.classList.add("alert");
    return;
  }
  var row = {
    name: uName.value,
    age: uAge.value,
    email: uEmail.value,
  };

  formArr.push(row);
  localStorage.setItem("data", JSON.stringify(formArr));
  displayData();
};

function displayData() {
  var rows = "";
  for (var i = 0; i < formArr.length; i++) {
    rows += `
            <tr>
            <td>${formArr[i].name}</td>
            <td>${formArr[i].age}</td>
            <td>${formArr[i].email}</td>
            </tr>
        `;
  }
  var data = `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
  `;
  contnet.innerHTML = data;
}

displayData();
