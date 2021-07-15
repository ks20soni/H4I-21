const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// const url = 'https://kinoticket.herokuapp.com';
const url = "http://localhost:8000";
let Name = document.querySelector(".form_input").children[0];
let Email = document.querySelector(".form_input").children[1];
// let Contact = document.querySelector(".form_input").children[2];
let Password = document.querySelector(".form_input").children[2];
let Password_reenter = document.querySelector(".form_input").children[3];
let Submit = document.querySelector(".form_input").children[4];
let Name_value = "";
let Email_value = "";
let Contact_value = 1;
let Password_value = "";
let Password_reenter_value = "";
let warning = document.querySelector(".warning");
let status = 0;





// ------------------------------------ navbar 1 --------------------------------------------------------
// const token = localStorage.getItem("jwt");

// if (token) {
//     fetch(`${url}/verify_login`, {
//       method: "GET",
//       headers: {
//         authorization: token,
//       },
//     }).then((res) => {
//         console.log(res)
//         if(res.status == 200)
//         {
//             let signin = document.getElementById("signin_link");
//             let hamburger_signin = document.getElementById("hamburger_signin");
//             let user_logo = document.getElementById("user_logo");
//             let hamburger_after_login = document.getElementById("hamburger_after_login");
//             signin.style.display = "none";
//             hamburger_signin.style.display = "none";
//             user_logo.style.display = "block";
//             hamburger_after_login.style.display = "block"
//         }
//     })
// }
// --------------------------------------- navbar 1 end -------------------------------------------------

Name.addEventListener("change",(event) => {
Name_value = event.target.value;
});
 
Email.addEventListener("change",(event) => {
Email_value = event.target.value;
});
 
// Contact.addEventListener("change",(event) => {
// Contact_value = event.target.value;
// });
 
Password.addEventListener("change",(event) => {
Password_value = event.target.value;
});
 
Password_reenter.addEventListener("change",(event) => {
Password_reenter_value = event.target.value;
});


 Submit.addEventListener("click",() => {
    //  let status = 1;
     Name.classList.remove("wrong");
     Email.classList.remove("wrong");
    //  Contact.classList.remove("wrong");
     Password.classList.remove("wrong");
     Password_reenter.classList.remove("wrong");
    //  warning.style.display = "none";
     if(Name_value == "")
     {
        //   warning.innerHTML = '<h1>Enter Your Name</h1>';
        //   warning.style.display = "block";
          Name.classList.add("wrong");
          return;
     }
     if(Email_value == "")
     {
          warning.innerHTML = '<h1>Enter Your Email</h1>';
          warning.style.display = "block";
          Email.classList.add("wrong");
          return;
     }
    //  if(Contact_value/1000000000 < 1 || Contact_value/1000000000 > 10)
    //  {
    //       warning.innerHTML = '<h1>Enter a Valid Contact</h1>';
    //       warning.style.display = "block";
    //       Contact.classList.add("wrong");
    //       return;
    //  }
     if(Password_value == "")
     {
          warning.innerHTML = '<h1>Enter Your Password</h1>';
          warning.style.display = "block";
          Password.classList.add("wrong");
          return;
     }
     if(Password_reenter_value == "")
     {
          warning.innerHTML = '<h1>Confirm Your Password</h1>';
          warning.style.display = "block";
          Password_reenter.classList.add("wrong");
          return;
     }
     if(Password_reenter_value != Password_value)
     {
          warning.innerHTML = '<h1>Password did not Match</h1>';
          warning.style.display = "block";
          Password_reenter.classList.add("wrong");
          Password.classList.add("wrong");
          return;
     }

     obj = {
         name : Name_value,
         email : Email_value,
         password : Password_value,
        //  contact : Contact_value
     }
     fetch(`${url}/auth/signup`,{
        method : "POST",
        
        headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(obj),
    }).then((res) => {
        status = res.status;
        return res.json();
    }).then((data) => {
        // console.log(data)
        if(status!=200)
        {
            // warning.innerHTML = `<h1>${data.error}</h1>`;
            // warning.style.display = "block";
        }
        else
        {
            const { token } = data;
            localStorage.setItem("jwt", token);
            location.href = `../myFirstPeriod/myFirstPeriod.html`
        }
    })
 })


 function logout_user()
{
    localStorage.removeItem("jwt");
    location.reload();
}


