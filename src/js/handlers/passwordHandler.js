const passwordStatehandler = (args) => {
  const { form, message, formInputState, callback } = args;

  return (e) => {
    if (e.target.validity.valid) {
      form.children[0].style = "color: rgb(52,199,89)";
      form.children[2].innerText = message;
      formInputState[e.target.id] = true;
    } else if (e.target.value.length == 0) {
      form.children[0].style = "color:rgb(0,122,255)";
      form.children[2].innerText =
        "Must be 8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.";
      formInputState[e.target.id] = false;
    } else {
      form.children[0].style = "color:rgb(255,59,48)";
      form.children[2].innerText =
        "Must be 8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.";
      formInputState[e.target.id] = false;
    }

    if (callback) {
      callback();
    }
  };
};

export { passwordStatehandler };
