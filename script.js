let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
cart.push({ name, price });
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " added to cart");
}

function renderCart() {
const cartItems = document.getElementById("cartItems");
if (!cartItems) return;

cartItems.innerHTML = "";
let total = 0;

cart.forEach((item, index) => {
total += item.price;
cartItems.innerHTML += `
<div>
${item.name} - $${item.price}
<button onclick="removeItem(${index})">Remove</button>
</div>`;
});

document.getElementById("total").textContent = total;
}

function removeItem(index) {
cart.splice(index, 1);
localStorage.setItem("cart", JSON.stringify(cart));
renderCart();
}