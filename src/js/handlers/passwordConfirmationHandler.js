const passwordConfirmationHandler = (
  passwordInput,
  passwordConfirmationInput,
  errorContainer
) => {
  return () => {
    if (passwordInput.value !== passwordConfirmationInput.value) {
      errorContainer.style.visibility = "visible";
    } else {
      errorContainer.style.visibility = "hidden";
    }
  };
};

export { passwordConfirmationHandler };
