const wrapper = document.querySelector(".wrapper");

const registerLink = document.querySelector(".register-link");

function func() {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-pw").value;

  if (email === "dibyasmitajena2004@gmail.com" && password === "0123") {
    window.location.href = "home2.html";
    alert("Successfully Login !");
  } else {
    alert("Invalid Information");
  }
}

const loginLink = document.querySelector(".login-link");

registerLink.addEventListener("click", function () {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", function () {
  wrapper.classList.remove("active");
});