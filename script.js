let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, option) {
cart.push({ name, price, option });
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " (" + option + ") added to cart");
}

function renderCart() {
const cartItems = document.getElementById("cartItems");
if (!cartItems) return;

cartItems.innerHTML = "";
let total = 0;

cart.forEach((item, i) => {
total += item.price;
cartItems.innerHTML += `
<div>
${item.name} - ${item.option} - $${item.price}
<button onclick="removeItem(${i})">Remove</button>
</div>`;
});

document.getElementById("total").textContent = total;
}

function removeItem(i) {
cart.splice(i, 1);
localStorage.setItem("cart", JSON.stringify(cart));
renderCart();
}