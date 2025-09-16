const products = [
  { id: 1, name: 'Kaos', price: 100000 },
  { id: 2, name: 'Topi', price: 50000 },
];

const ul = document.getElementById('products');
products.forEach(p => {
  const li = document.createElement('li');
  li.textContent = `${p.name} - Rp ${p.price}`;
  ul.appendChild(li);
});