let products = [];
let cart = [];

// Load products from backend
async function loadProducts() {
  try {
    const res = await fetch('/api/products');
    products = await res.json();
    renderProducts();
  } catch (err) {
    console.error('Error loading products:', err);
  }
}

// Render product cards
function renderProducts() {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.image_url}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description || ''}</p>
      <p class="price">₹${Number(product.price).toFixed(2)}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;

    productsContainer.appendChild(card);
  });
}

// Handle clicks on Add to Cart buttons (event delegation)
document.addEventListener('click', function (e) {
  if (e.target.matches('button[data-id]')) {
    const id = Number(e.target.getAttribute('data-id'));
    addToCart(id);
  }
});

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    // ✅ LIMIT TO MAX 4 PER ITEM
    if (existing.quantity < 4) {
      existing.quantity += 1;
    } else {
      alert('You can only add a maximum of 4 of this item.');
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      quantity: 1
    });
  }

  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  cartList.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    count += item.quantity;

    li.textContent = `${item.name} x ${item.quantity} = ₹${itemTotal.toFixed(2)}`;
    cartList.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = count;
}

// Initial load when page is ready
document.addEventListener('DOMContentLoaded', loadProducts);
