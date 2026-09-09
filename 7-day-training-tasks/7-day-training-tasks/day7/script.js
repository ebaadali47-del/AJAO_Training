const recipes = [
  { name: "Veggie Stir Fry", time: "20 min", desc: "Mixed vegetables cooked in a light soy garlic sauce." },
  { name: "Chicken Pasta", time: "25 min", desc: "Creamy pasta with grilled chicken and herbs." },
  { name: "Egg Fried Rice", time: "15 min", desc: "Simple fried rice with eggs and spring onions." },
  { name: "Lentil Soup", time: "30 min", desc: "Warm and filling lentil soup with basic spices." },
  { name: "Grilled Cheese Sandwich", time: "10 min", desc: "Classic buttery grilled cheese, quick and easy." },
  { name: "Chickpea Salad", time: "12 min", desc: "Fresh salad with chickpeas, cucumber and lemon dressing." }
];

const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");

function renderRecipes(list) {
  recipeGrid.innerHTML = "";

  if (list.length === 0) {
    recipeGrid.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  list.forEach(function (recipe) {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML =
      "<h3>" + recipe.name + "</h3>" +
      "<p>" + recipe.desc + "</p>" +
      "<span class='recipe-time'>" + recipe.time + "</span>";

    recipeGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter(function (recipe) {
    return recipe.name.toLowerCase().includes(query);
  });
  renderRecipes(filtered);
});

renderRecipes(recipes);

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Contact form
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

  formStatus.textContent = "Thanks, " + name + "! We received your message.";
  formStatus.style.color = "green";
  contactForm.reset();
});
