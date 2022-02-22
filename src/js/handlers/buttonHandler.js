const buttonHandler = (args) => {
  const {
    formInputState,
    formLabel,
    submitButton,
    passwordInput,
    passwordConfirmationInput,
  } = args;
  return (e) => {
    const inputCondition = Object.entries(formInputState)
      .flat()
      .filter((x) => typeof x == "boolean")
      .every((y) => y === true);

    if (passwordInput && passwordConfirmationInput) {
      if (
        inputCondition &&
        passwordInput.value == passwordConfirmationInput.value
      ) {
        formLabel.style = "color: rgb(52,199,89)";
        submitButton.disabled = false;
      } else {
        formLabel.style = "color:rgb(0,122,255)";
        submitButton.disabled = true;
      }
    } else {
      if (inputCondition) {
        formLabel.style = "color: rgb(52,199,89)";
        submitButton.disabled = false;
      } else {
        formLabel.style = "color:rgb(0,122,255)";
        submitButton.disabled = true;
      }
    }
  };
};

export { buttonHandler };
