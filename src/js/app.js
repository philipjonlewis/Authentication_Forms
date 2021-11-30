const label = document.querySelectorAll(".form-element");
const button = document.querySelector(".form-button-container button");
const formTitle = document.querySelector(".form-label-container p");

label.forEach((x) => {
  x.children[1].addEventListener("input", (e) => {
    if (Array.from(label).every((x) => x.children[1].validity.valid)) {
      formTitle.style = "color: rgb(52,199,89)";

      button.disabled = false;
    } else {
      formTitle.style = "color:rgb(0,122,255)";

      button.disabled = true;
    }

    if (!e.path[0].validity.valid) {
      x.children[0].style = "color:rgb(255,59,48)";
    } else {
      x.children[0].style = "color: rgb(52,199,89)";
    }

    if (e.target.value.length == 0) {
      x.children[0].style = "color:rgb(0,122,255)";
    }
  });

  x.children[1].addEventListener("blur", (e) => {
    if (!e.path[0].validity.valid) {
      x.children[2].innerHTML = e.path[0].validationMessage;
    } else {
      x.children[2].innerHTML = "Success!";
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
