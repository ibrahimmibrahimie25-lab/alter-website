async function CartPage() {
  const cart = Store.getCart();
  const total = Store.getTotal();
  const count = Store.getCount();
  if (cart.length === 0) {
    return `
      <section class="container py-20 text-center animate-fade-in">
        <div class="max-w-md mx-auto">
          <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-[#3E3636] flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D72323" stroke-width="1.5" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.4a2 2 0 0 0 2 1.6h9.72a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          </div>
          <h2 class="text-2xl font-bold text-[#F5EDED] mb-2">Your cart is empty</h2>
          <p class="text-[#F5EDED]/50 mb-6">Looks like you haven't added anything yet.</p>
          <a href="#categories" class="inline-flex items-center gap-2 bg-[#D72323] text-[#F5EDED] font-semibold px-6 py-3 rounded-full hover:bg-[#b01c1c] transition-all">
            Start Shopping
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </section>
      ${Footer()}
    `;
  }
  return `
    <section class="container py-8 md:py-16">
      <div class="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 class="text-2xl md:text-4xl font-bold text-[#F5EDED]">Shopping Cart</h1>
          <p class="text-[#F5EDED]/50 mt-1">${count} ${count === 1 ? 'item' : 'items'}</p>
        </div>
        <a href="#categories" class="text-sm text-[#D72323] font-medium hover:underline">Continue Shopping</a>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 bg-[#3E3636] rounded-2xl p-4 md:p-6 shadow-sm">
          ${cart.map(item => CartItem(item)).join('')}
        </div>
        <div class="bg-[#3E3636] rounded-2xl p-6 shadow-sm h-fit animate-fade-in stagger-3">
          <h3 class="font-bold text-[#F5EDED] text-lg mb-4">Order Summary</h3>
          <div class="space-y-3 mb-4">
            ${cart.map(item => `
              <div class="flex justify-between text-sm">
                <span class="text-[#F5EDED]/60 truncate max-w-[180px]">${item.name} × ${item.quantity}</span>
                <span class="font-medium text-[#F5EDED]">$${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            `).join('')}
          </div>
          <div class="border-t border-[#3E3636]/50 pt-4 mb-6">
            <div class="flex justify-between text-lg font-bold">
              <span class="text-[#F5EDED]">Total</span>
              <span class="text-[#D72323]">$${total.toFixed(2)}</span>
            </div>
          </div>
          <button onclick="checkout()" class="w-full bg-[#D72323] text-[#F5EDED] font-bold py-3.5 rounded-xl text-base hover:bg-[#b01c1c] transition-all active:scale-[0.98]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
    ${Footer()}
  `;
}
