const signupForm = document.getElementById("signup-form");
const formLabel = document.querySelector(".form-label-container p");

const emailForm = document.getElementById("email-form-element");
const passwordForm = document.getElementById("password-form-element");
const passwordConfirmationForm = document.getElementById(
  "passwordConfirmation-form-element"
);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById(
  "passwordConfirmation"
);
const errorContainer = document.getElementById("error-container");
const submitButton = document.querySelector("button");

const formInputState = {
  email: false,
  password: false,
  passwordConfirmation: false,
};

const passwordFieldElement = document.querySelectorAll(
  ".password-field-element"
);

// Toggle show password
passwordFieldElement.forEach((x) => {
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

const emailInputHandler = (field) => {
  if (field.validity.valid) {
    emailForm.children[0].style = "color: rgb(52,199,89)";
    emailForm.children[2].innerText = "Email is in the correct format";
    formInputState.email = true;
  } else if (field.value.length == 0) {
    emailForm.children[0].style = "color:rgb(0,122,255)";
    emailForm.children[2].innerText = "example format : johndoe@email.com";
    formInputState.email = false;
  } else {
    emailForm.children[0].style = "color:rgb(255,59,48)";
    emailForm.children[2].innerText = field.validationMessage;
    formInputState.email = false;
  }
};

if (localStorage.getItem("email").length >= 1) {
  emailInput.value = localStorage.getItem("email");
  emailInputHandler(emailInput);
}

const emailStateHandler = (e) => {
  localStorage.setItem("email", e.target.value);
  emailInputHandler(e.target);
};

const passwordStatehandler = (formInput, message) => {
  return (e) => {
    if (e.target.validity.valid) {
      formInput.children[0].style = "color: rgb(52,199,89)";
      formInput.children[2].innerText = message;
      formInputState[e.target.id] = true;
    } else if (e.target.value.length == 0) {
      formInput.children[0].style = "color:rgb(0,122,255)";
      formInput.children[2].innerText =
        "Must be 8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.";
      formInputState[e.target.id] = false;
    } else {
      formInput.children[0].style = "color:rgb(255,59,48)";
      formInput.children[2].innerText =
        "Must be 8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.";
      //   formInput.children[2].innerText = e.target.validationMessage;
      formInputState[e.target.id] = false;
    }
  };
};

// Email input listener
emailInput.addEventListener("input", emailStateHandler);

// Password input listener
passwordInput.addEventListener(
  "input",
  passwordStatehandler(passwordForm, "Password is in the correct format")
);

// Password Confirmation input listener
passwordConfirmationInput.addEventListener(
  "input",
  passwordStatehandler(
    passwordConfirmationForm,
    "Password Confirmation is in the correct format"
  )
);

// Button event listener
window.addEventListener("input", (e) => {
  const formFieldState = Object.entries(formInputState)
    .flat()
    .filter((x) => typeof x == "boolean")
    .every((y) => y === true);
  if (
    formFieldState &&
    passwordInput.value == passwordConfirmationInput.value
  ) {
    formLabel.style = "color: rgb(52,199,89)";
    submitButton.disabled = false;
  } else {
    formLabel.style = "color:rgb(0,122,255)";
    submitButton.disabled = true;
  }

  if (
    Object.entries(formInputState)
      .flat()
      .filter((x) => typeof x == "boolean")
      .every((y) => y === true) &&
    passwordInput.value != passwordConfirmationInput.value
  ) {
    errorContainer.style.visibility = "visible";
  } else {
    errorContainer.style.visibility = "hidden";
  }
});

// Object.entries(formInputState).forEach((x) => {
//   console.log(x);
// });
