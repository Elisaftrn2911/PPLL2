const cart = [];
const products = [
  { id: 1, name: 'Kaos', price: 100000 },
  { id: 2, name: 'Topi', price: 50000 },
];

const ul = document.getElementById('products');
products.forEach(p => {
  const li = document.createElement('li');
  li.textContent = `${p.name} - Rp ${p.price} `;
  const btn = document.createElement('button');
  btn.textContent = 'Add to Cart';
  btn.onclick = () => {
    cart.push(p);
    alert(p.name + ' ditambahkan ke keranjang');
    console.log(cart);
  };
  li.appendChild(btn);
  ul.appendChild(li);
});