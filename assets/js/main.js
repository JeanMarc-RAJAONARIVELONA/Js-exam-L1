const navbar = document.querySelector("nav");
const reservationBtn = document.querySelector(".reservation-button");
const successreservation = document.querySelector("#successReservation");
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
//show reservation message success
function reservation() {
  successreservation.classList.remove("reservation-hidden");
  successreservation.classList.add("reservation-succes");
  setTimeout(() => {
    successreservation.classList.add("reservation-hidden");
    successreservation.classList.remove("reservation-succes");
  }, 1500);
}
