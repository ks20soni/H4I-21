const url = 'http://localhost:3000';
const body=document.querySelector("body");
window.addEventListener('load',()=>{
body.classList.add("visible");
});

const token = localStorage.getItem("jwt");

if (token) {
    fetch(`${url}/verify_login`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    }).then((res) => {
        console.log(res)
        if(res.status == 200)
        {
            let signin = document.getElementById("signin_link");
            let hamburger_signin = document.getElementById("hamburger_signin");
            let user_logo = document.getElementById("user_logo");
            let hamburger_after_login = document.getElementById("hamburger_after_login");
            signin.style.display = "none";
            hamburger_signin.style.display = "none";
            user_logo.style.display = "block";
            hamburger_after_login.style.display = "block"
        }
    })
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  

  function logout_user()
  {
      localStorage.removeItem("jwt");
      location.reload();
  }