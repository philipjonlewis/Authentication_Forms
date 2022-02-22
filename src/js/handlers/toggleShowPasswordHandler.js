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

export { toggleShowPasswordHandler };
