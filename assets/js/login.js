const login = document.querySelector(".login-button");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const error = document.querySelector("#error");
//function to reset form value
const resetValue = (input) => {
  input.value = "";
};
//Let's define the email and password
let mail = "student+1@hei.school";
let pass = "stu_d1t>he124!K";

// function who change buttun value
let loading = () => (login.textContent = ".....");
let stoploading = () => {
  resetValue(emailInput);
  resetValue(passwordInput);
  login.textContent = "Login Now";
};

// Function to manage error
let showError = () => {
  error.classList.remove("error-hidden");
  error.classList.add("error-content");
  setTimeout(() => {
    error.classList.remove("error-content");
    error.classList.add("error-hidden");
  }, 1500);
};

//Let's check  email and password
login.addEventListener("click", (event) => {
  event.preventDefault();
  let user = emailInput.value;
  let password = passwordInput.value;
  loading();
  setTimeout(() => {
    if (user === mail && password === pass) {
      window.location.href = "index.html";
    } else {
      stoploading();
      showError();
    }
  }, 2500);
});
