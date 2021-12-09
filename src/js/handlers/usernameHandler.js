const usernameInputHandler = (field, usernameForm, formInputState) => {
  if (field.value.length >= 8 && field.value.length <= 16) {
    usernameForm.children[0].style = "color: rgb(52,199,89)";
    usernameForm.children[2].innerText = "Username is in the correct format";
    formInputState.username = true;
  } else if (field.value.length == 0) {
    usernameForm.children[0].style = "color:rgb(0,122,255)";
    usernameForm.children[2].innerText = "example format : johndoe@email.com";
    formInputState.username = false;
  } else {
    usernameForm.children[0].style = "color:rgb(255,59,48)";
    usernameForm.children[2].innerText = field.validationMessage;
    formInputState.username = false;
  }
};

export { usernameInputHandler };
