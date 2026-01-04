if (!cookieLib.hasCookie("username")) {
  window.location.assign("register.html");
}

const name = cookieLib.getCookie("username");
const color = cookieLib.getCookie("color");
const gender = cookieLib.getCookie("gender");

let visits = parseInt(cookieLib.getCookie("visits"));
visits++;

const expiry = new Date();
expiry.setMonth(expiry.getMonth() + 1);
cookieLib.setCookie("visits", visits, expiry);

let imgSrc;
if (gender === "male") {
  imgSrc = "male.png";
} else {
  imgSrc = "female.png";
}

document.getElementById("profile").innerHTML = `
  <h2 style="color:${color}">
    Welcome ${name}
  </h2>

  <img src="${imgSrc}" width="200">

  <p style="color:${color}">
    You have visited this site ${visits} times
  </p>
`;
