const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
let cart = [];
const addButtons = document.querySelectorAll(".add-cart");
const cartItemsContainer = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");

addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productElement = btn.parentElement;
    const name = productElement.querySelector("h3").innerText;
    const price = parseFloat(productElement.querySelector("p").innerText.replace("₹", "").replace(",", ""));
    const item = { name, price };
    cart.push(item);
    updateCart();
  });
});

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name} - ₹${item.price.toFixed(2)}</span>
      <button class="remove" onclick="removeItem(${i})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });

  totalPrice.innerText = `Total: ₹${total.toFixed(2)}`;
  cartCount.innerText = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});
