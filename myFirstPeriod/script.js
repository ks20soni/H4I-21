const body = document.querySelector("body");
const signUpButton = document.querySelector(".signUp");

// window.addEventListener("load", () => {
//   body.classList.add("visible");

//   const token = localStorage.getItem("jwt");

//   if (token) {
//     location.href = "/H4I-21/myFirstPeriod/myFirstPeriod.html";
//   }
// });

signUpButton.addEventListener("click", () => {
  location.href = "/H4I-21/signup-signin/index.html";
});

function myFunction1() {
  var popup1 = document.getElementById("myPopup1");
  popup1.classList.toggle("show");
}

function myFunction2() {
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.toggle("show");
}

function myFunction3() {
  var popup3 = document.getElementById("myPopup3");
  popup3.classList.toggle("show");
}

function myFunction4() {
  var popup4 = document.getElementById("myPopup4");
  popup4.classList.toggle("show");
}

function myFunction5() {
  var popup5 = document.getElementById("myPopup5");
  popup5.classList.toggle("show");
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}