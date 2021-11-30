const label = document.querySelectorAll(".form-element");
const button = document.querySelector(".form-button-container button");

label.forEach((x) => {
  x.children[1].addEventListener("input", (e) => {
    if (Array.from(label).every((x) => x.children[1].validity.valid)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});

// console.log(label);

// console.dir(button.disabled);
// document.addEventListener("invalid", () => {
//   if (fromInputValidity) {
//     button.disabled = false;
//   }
// });
