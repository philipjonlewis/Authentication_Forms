import { emailInputHandler } from "./emailhandler";

const emailStateHandler = (emailForm, formInputState) => {
  return (e) => {
    localStorage.setItem("email", e.target.value);
    emailInputHandler(e.target, emailForm, formInputState);
  };
};

export { emailStateHandler };
