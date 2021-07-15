const body = document.querySelector("body");
const signUpButton = document.querySelector(".signUp");

window.addEventListener("load", () => {
  body.classList.add("visible");

const token = localStorage.getItem("jwt");

  if (token) {
    location.href = "/H4I-21/myFirstPeriod/myFirstPeriod.html";
  }
});

signUpButton.addEventListener("click", () => {
  location.href = "/H4I-21/signup-signin/index.html";
});



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  