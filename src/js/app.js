const formTitle = document.querySelector(".form-label-container p");
const formElement = document.querySelectorAll(".form-element");
const formButton = document.querySelector(".form-button-container button");

const formValues = [true, false, true];

const formState = formValues.every((x) => x == true);
console.log(formState);

const red = "color:rgb(255,59,48)";
const green = "color: rgb(52,199,89)";
const blue = "color:rgb(0,122,255)";

formElement.forEach((x) => {
  const inputLabel = x.children[0];
  const inputField = x.children[1];
  const inputText = x.children[2];

  inputField.addEventListener("input", (e) => {
    if (Array.from(inputLabel).every((y) => y.children[1].validity.valid)) {
      formTitle.style = green;
      formButton.disabled = false;
    } else {
      formTitle.style = blue;
      formButton.disabled = true;
    }

    if (inputField.type == "email") {
      if (!e.target.validity.valid) {
        inputLabel.style = red;
        inputText.innerHTML = e.target.validationMessage;
      } else {
        inputLabel.style = green;
        inputText.innerHTML = "Email is in the right format";
      }
    }

    if (
      inputField.id == "password" ||
      inputField.id == "passwordConfirmation"
    ) {
      if (!e.target.validity.valid) {
        inputLabel.style = red;
        inputText.innerHTML = `8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.`;
      } else {
        inputLabel.style = green;
        inputText.innerHTML = "Password is in the right format";
      }
    }

    if (e.target.value.length == 0) {
      inputLabel.style = blue;
    }
  });
});

const passwordForm = document.querySelectorAll(".password-form-element");

// Toggle show password
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

passwordConfirmation.addEventListener("inputField", (e) => {
  if (e.target.value != password.value && !pwdcLabel.innerHTML.includes("8")) {
    formButton.disabled = true;
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

// ! Only password confirmation checks the value of password but not vice versa so kapag inuna mo itama yung passord after confirmation hindi nawawala yung red text

// TODO Fix and formalize regex throughout this and the backend
// TODO fix inputField format suggestions and labeks
// TODO Add backend logic to remin to change password every malapit na mag expire ang grefresh cookie


// ! 