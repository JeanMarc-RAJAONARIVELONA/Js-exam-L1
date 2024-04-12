const navbar = document.querySelector("nav");

console.log(navbar);
//redirect into login page
const signout = document.querySelector(".sign-out");
signout.addEventListener("click", () => {
  window.location.replace("login.html");
});

//change navbar position
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 10) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});
