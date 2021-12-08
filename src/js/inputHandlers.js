const emailInputHandler = (field, emailForm, formInputState) => {
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

const passwordStatehandler = (args) => {
  const {
    formInput,
    message,
    formInputState,
    errorContainer,
    passwordInput,
    passwordConfirmationInput,
  } = args;

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
      formInputState[e.target.id] = false;
    }

    if (passwordInput && passwordConfirmationInput) {
      if (passwordInput.value !== passwordConfirmationInput.value) {
        errorContainer.style.visibility = "visible";
      } else {
        errorContainer.style.visibility = "hidden";
      }
    }
  };
};

const toggleShowPasswordHandler = (elements) => {
  elements.forEach((x) => {
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
};

const buttonhandler = (args) => {
  const {
    formInputState,
    formLabel,
    submitButton,
    passwordInput,
    passwordConfirmationInput,
  } = args;
  return (e) => {
    if (
      Object.entries(formInputState)
        .flat()
        .filter((x) => typeof x == "boolean")
        .every((y) => y === true) &&
      passwordInput?.value == passwordConfirmationInput?.value
    ) {
      formLabel.style = "color: rgb(52,199,89)";
      submitButton.disabled = false;
    } else {
      formLabel.style = "color:rgb(0,122,255)";
      submitButton.disabled = true;
    }
  };
};

export {
  emailInputHandler,
  passwordStatehandler,
  toggleShowPasswordHandler,
  buttonhandler,
};
