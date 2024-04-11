const login = document.querySelector(".login-button");
const password = document.querySelector(".password").value;
const user = document.querySelector(".email").value;
let mail = "hei.student.heischool";
let pass = "buDYMy(beM2&QevD";

function authentificationcheck() {
  if (user == mail && password == pass) {
    alert("Succèss");
  } else {
    alert("error");
  }
}
