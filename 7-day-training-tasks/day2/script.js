const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "red";
    return;
  }

  formStatus.textContent = "Thank you, " + name + "! Your message has been sent.";
  formStatus.style.color = "green";
  contactForm.reset();
});
