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

export { emailInputHandler };
