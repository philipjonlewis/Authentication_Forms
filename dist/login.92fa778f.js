const e=(e,t,n)=>{e.validity.valid?(t.children[0].style="color: rgb(52,199,89)",t.children[2].innerText="Email is in the correct format",n.email=!0):0==e.value.length?(t.children[0].style="color:rgb(0,122,255)",t.children[2].innerText="example format : johndoe@email.com",n.email=!1):(t.children[0].style="color:rgb(255,59,48)",t.children[2].innerText=e.validationMessage,n.email=!1)},t=(document.getElementById("signup-form"),document.getElementById("login-form")),n=(document.getElementById("forgot-password-form"),document.getElementById("edit-username-form"),document.getElementById("edit-email-form"),document.getElementById("edit-password-form"),document.querySelector(".form-label-container p")),r=document.getElementById("email-form-element"),l=(document.getElementById("username-form-element"),document.getElementById("current-password-form-element"),document.getElementById("password-form-element")),o=(document.getElementById("passwordConfirmation-form-element"),document.getElementById("email")),a=(document.getElementById("username"),document.getElementById("currentPassword"),document.getElementById("password")),d=(document.getElementById("passwordConfirmation"),document.getElementById("error-container"),document.querySelector("button")),i={email:!1,password:!1};document.querySelectorAll(".password-field-element").forEach((e=>{e.children[4].style="display:none",e.children[3].addEventListener("click",(t=>{t.target.style="display:none",e.children[4].style="display:block",e.children[1].type="text"})),e.children[4].addEventListener("click",(t=>{t.target.style="display:none",e.children[3].style="display:block",e.children[1].type="password"}))})),localStorage.getItem("email").length>=1&&(o.value=localStorage.getItem("email"),e(o,r,i));o.addEventListener("input",(t=>{localStorage.setItem("email",t.target.value),e(t.target,r,i)})),a.addEventListener("input",(e=>{const{form:t,message:n,formInputState:r,callback:l}=e;return e=>{e.target.validity.valid?(t.children[0].style="color: rgb(52,199,89)",t.children[2].innerText=n,r[e.target.id]=!0):0==e.target.value.length?(t.children[0].style="color:rgb(0,122,255)",t.children[2].innerText="Must be 8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.",r[e.target.id]=!1):(t.children[0].style="color:rgb(255,59,48)",t.children[2].innerText="Must be 8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.",r[e.target.id]=!1),l&&l()}})({form:l,message:"Password is in the correct format",formInputState:i})),t.addEventListener("input",(e=>{const{formInputState:t,formLabel:n,submitButton:r,passwordInput:l,passwordConfirmationInput:o}=e;return e=>{const a=Object.entries(t).flat().filter((e=>"boolean"==typeof e)).every((e=>!0===e));l&&o?a&&l.value==o.value?(n.style="color: rgb(52,199,89)",r.disabled=!1):(n.style="color:rgb(0,122,255)",r.disabled=!0):a?(n.style="color: rgb(52,199,89)",r.disabled=!1):(n.style="color:rgb(0,122,255)",r.disabled=!0)}})({formInputState:i,formLabel:n,submitButton:d}));
//# sourceMappingURL=login.92fa778f.js.map
