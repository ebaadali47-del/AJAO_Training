const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");
const addToCartBtn = document.getElementById("addToCartBtn");
const cartCount = document.getElementById("cartCount");
const cartMsg = document.getElementById("cartMsg");
const qtyInput = document.getElementById("qty");

let cartTotal = 0;

thumbs.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    mainImage.src = thumb.getAttribute("data-full");
  });
});

addToCartBtn.addEventListener("click", function () {
  let qty = parseInt(qtyInput.value);

  if (isNaN(qty) || qty < 1) {
    qty = 1;
    qtyInput.value = 1;
  }

  cartTotal += qty;
  cartCount.textContent = cartTotal;
  cartMsg.textContent = qty + " item(s) added to cart.";

  setTimeout(function () {
    cartMsg.textContent = "";
  }, 2000);
});
