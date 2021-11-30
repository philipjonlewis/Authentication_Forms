const label = document.querySelectorAll(".form-element");
const button = document.querySelector(".form-button-container button");
const formTitle = document.querySelector(".form-label-container p");

const colors = {
  red: "color:rgb(255,59,48)",
  green: "color: rgb(52,199,89)",
  blue: "color:rgb(0,122,255)",
};

label.forEach((x) => {
  const el = {
    label: x.children[0],
    input: x.children[1],
    text: x.children[2],
  };

  el.input.addEventListener("input", (e) => {
    if (Array.from(label).every((y) => y.children[1].validity.valid)) {
      formTitle.style = "color: rgb(52,199,89)";
      button.disabled = false;
    } else {
      formTitle.style = "color:rgb(0,122,255)";
      button.disabled = true;
    }

    if (el.input.type == "email") {
      if (!e.path[0].validity.valid) {
        el.label.style = "color:rgb(255,59,48)";
        el.text.innerHTML = e.path[0].validationMessage;
      } else {
        el.label.style = "color: rgb(52,199,89)";
        el.text.innerHTML = "Email is in the right format";
      }
    }

    if (el.input.id == "password" || el.input.id == "passwordConfirmation") {
      if (!e.path[0].validity.valid) {
        el.label.style = "color:rgb(255,59,48)";
        el.text.innerHTML = `8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.`;
      } else {
        el.label.style = "color: rgb(52,199,89)";
        el.text.innerHTML = "Password is in the right format";
      }
    }

    if (e.target.value.length == 0) {
      el.label.style = "color:rgb(0,122,255)";
    }
  });
});

const passwordForm = document.querySelectorAll(".password-form-element");

passwordForm.forEach((x) => {
  x.children[4].style = "display:none";

  x.children[3].addEventListener("click", (e) => {
    e.target.style = "display:none";
    x.children[4].style = "display:block";

    x.children[1].type = "text";
  });

  x.children[4].addEventListener("click", (e) => {
    e.target.style = "display:none";
    x.children[3].style = "display:block";

    x.children[1].type = "password";
  });
});

const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");
const pwdcLabel = document.getElementById("passwordConfirmation-text");

passwordConfirmation.addEventListener("input", (e) => {

  if (e.target.value != password.value && !pwdcLabel.innerHTML.includes("8")) {
    button.disabled = true;
    pwdcLabel.style = "color:rgb(255,59,48)";
    pwdcLabel.innerHTML = `${pwdcLabel.innerHTML} but it isnt the same with the field above`;
  } else {
    pwdcLabel.style = "color:#a0a0a0";
    pwdcLabel.innerHTML = `8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.`;
  }

  if (e.target.value == password.value) {
    pwdcLabel.innerHTML = `wow!`;
  }
  
});

// TODO Fix and formalize regex throughout this and the backend
// TODO fix input format suggestions and labeks
// TODO Add backend logic to remin to change password every malapit na mag expire ang grefresh cookie
