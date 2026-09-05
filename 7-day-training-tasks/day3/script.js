const loginTabBtn = document.getElementById("loginTabBtn");
const registerTabBtn = document.getElementById("registerTabBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginTabBtn.addEventListener("click", function () {
  loginTabBtn.classList.add("active");
  registerTabBtn.classList.remove("active");
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});

registerTabBtn.addEventListener("click", function () {
  registerTabBtn.classList.add("active");
  loginTabBtn.classList.remove("active");
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

function isEmailValid(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Login validation
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const emailError = document.getElementById("loginEmailError");
  const passwordError = document.getElementById("loginPasswordError");
  const successMsg = document.getElementById("loginSuccess");

  emailError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!isEmailValid(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (password === "") {
    passwordError.textContent = "Password is required.";
    valid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Login successful!";
    loginForm.reset();
  }
});

// Register validation
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  const nameError = document.getElementById("regNameError");
  const emailError = document.getElementById("regEmailError");
  const passwordError = document.getElementById("regPasswordError");
  const confirmError = document.getElementById("regConfirmError");
  const successMsg = document.getElementById("regSuccess");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  successMsg.textContent = "";

  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!isEmailValid(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (password === "") {
    passwordError.textContent = "Password is required.";
    valid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (confirm === "") {
    confirmError.textContent = "Please confirm your password.";
    valid = false;
  } else if (confirm !== password) {
    confirmError.textContent = "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Registration successful!";
    registerForm.reset();
  }
});
