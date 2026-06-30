function ProductCard(product) {
  const sizes = JSON.parse(product.sizes || '[]');
  const colors = JSON.parse(product.colors || '[]');
  return `
    <div class="card-hover bg-[#3E3636] rounded-2xl overflow-hidden shadow-sm animate-scale-in flex flex-col">
      <a href="#product/${product.id}" class="block aspect-[4/5] overflow-hidden bg-[#2A2525]">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy">
      </a>
      <div class="p-4 md:p-5 flex flex-col flex-1">
        <a href="#product/${product.id}" class="text-[#F5EDED] font-semibold text-sm md:text-base leading-snug hover:text-[#D72323] transition-colors mb-1">${product.name}</a>
        <p class="text-[#D72323] font-bold text-lg md:text-xl mb-3">$${product.price.toFixed(2)}</p>
        <div class="mt-auto">
          <button onclick="event.preventDefault(); addToCartFromCard(${product.id}, '${product.name}', ${product.price}, '${product.image}', '${sizes[0] || 'M'}', '${colors[0] || 'Black'}')"
            class="w-full bg-[#D72323] text-[#F5EDED] text-sm font-semibold py-2.5 rounded-xl hover:bg-[#b01c1c] transition-all duration-300 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function addToCartFromCard(id, name, price, image, size, color) {
  const product = { id, name, price, image };
  Store.addItem(product, size, color, 1);
  const btn = event.target;
  const original = btn.textContent;
  btn.textContent = 'Added!';
  btn.style.background = '#3E3636';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
  }, 1200);
}
