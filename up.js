pwFields.forEach(password => {
  if(password.type === "password"){
      password.type = "text";
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return;
  }
  password.type = "password";
  eyeIcon.classList.replace("bx-show", "bx-hide");
})
     
links.forEach(link => {
link.addEventListener("click", e => {
e.preventDefault(); //preventing form submit
forms.classList.toggle("show-signup");
})
})

