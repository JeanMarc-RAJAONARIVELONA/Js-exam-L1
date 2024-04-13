const navbar = document.querySelector("nav");
const reservationBtn = document.querySelector(".reservation-button");
const successreservation = document.querySelector("#successReservation");
const sent = document.querySelector("#sent");
const newpaperInput = document.querySelector("#newpaper");
const sendButton = document.querySelector("#send");
const inputValue = document.querySelectorAll(".inputValue");
const incremention = document.querySelectorAll(".increment");
const sections = document.querySelectorAll("section");
const aboutSection = document.querySelector("#about");
const destinationsection = document.querySelector("#destination");
const reservationSection = document.querySelector("#reservation");
const hotelSection = document.querySelector("#hotel");
//function to reset form value
const resetValue = (input) => {
  input.value = "";
};
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
// animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "about":
            aboutSection.classList.remove("scroll-hidden");
            let interval = 4000;
            incremention.forEach((displayvalue) => {
              let startValue = 0;
              let endValue = parseInt(displayvalue.getAttribute("data-val"));
              let duration = Math.floor(interval / endValue);
              let counter = setInterval(() => {
                startValue += 1;
                displayvalue.textContent = startValue;
                if (startValue == endValue) {
                  clearInterval(counter);
                }
              }, duration);
            });
            break;
          case "destination":
            destinationsection.classList.remove("scroll-hidden");
            break;
          case "reservation":
            reservationSection.classList.remove("scroll-hidden");
            break;
          case "hotel":
            hotelSection.classList.remove("scroll-hidden");
            break;
        }
      }
    });
  },
  {
    threshold: 1.0,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

//show reservation message success
const reservation = () => {
  successreservation.classList.remove("hidden");
  successreservation.classList.add("reservation-succes");
  setTimeout(() => {
    successreservation.classList.add("hidden");
    successreservation.classList.remove("reservation-succes");
  }, 1500);
};

//show notification when email for newqp
sendButton.addEventListener("click", () => {
  if (newpaperInput.value != "" || null) {
    resetValue(newpaperInput);
    sent.classList.remove("hidden");
    sent.classList.add("sent");
    setTimeout(() => {
      sent.classList.add("hidden");
      sent.classList.remove("sent");
    }, 1500);
  }
});
