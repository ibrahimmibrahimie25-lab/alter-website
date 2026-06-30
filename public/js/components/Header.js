function Header() {
  const count = Store.getCount();
  return `
    <header class="bg-[#000000]/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-[#3E3636]/50">
      <div class="container flex items-center justify-between h-16 md:h-20">
        <div class="cursor-pointer" onclick="navigate('#home')">
          <span class="text-[#F5EDED] font-extrabold text-xl tracking-tight">KJO <span class="text-[#D72323]">ALTER</span></span>
        </div>
        <div class="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div class="relative w-full group">
            <input type="text" placeholder="Search products..." id="searchInput" onkeydown="if(event.key==='Enter'){const v=this.value.trim();if(v)navigate('#search/'+encodeURIComponent(v))}"
              class="w-full bg-[#3E3636] rounded-full py-2.5 pl-11 pr-5 text-sm border-0 text-[#F5EDED] placeholder-[#F5EDED]/40 focus:bg-[#3E3636] focus:ring-2 focus:ring-[#D72323]/40 focus:shadow-lg transition-all duration-300">
            <svg onclick="const inp=document.getElementById('searchInput');const v=inp.value.trim();if(v)navigate('#search/'+encodeURIComponent(v))"
              class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F5EDED]/40 group-focus-within:text-[#D72323] cursor-pointer transition-colors duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>
        <nav class="flex items-center gap-0.5 md:gap-3">
          <a href="#categories" class="hidden md:inline-flex px-4 py-2 text-sm font-medium text-[#F5EDED]/70 hover:text-[#D72323] transition-colors rounded-full hover:bg-[#3E3636]">New Collections</a>
          <button class="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#F5EDED] rounded-full bg-[#3E3636] hover:bg-[#D72323]/20 hover:text-[#D72323] transition-all duration-300" onclick="alert('Support chat coming soon!')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/><path d="M9 10a3 3 0 1 1 6 0c0 1.5-1.5 2-3 3v1"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>
            Support
          </button>
          <button onclick="document.getElementById('searchInputMobile')?.focus()" class="md:hidden p-2.5 rounded-full hover:bg-[#3E3636] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5EDED" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <a href="#cart" class="relative p-2.5 rounded-full hover:bg-[#3E3636] transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5EDED" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.4a2 2 0 0 0 2 1.6h9.72a2 2 0 0 0 2-1.6L23 6H6"/></svg>
            <span class="cart-badge" id="cartBadge">${count}</span>
          </a>
        </nav>
      </div>
      <div class="md:hidden border-t border-[#3E3636]/50 px-4 py-2.5">
        <div class="relative">
          <input type="text" placeholder="Search products..." id="searchInputMobile" onkeydown="if(event.key==='Enter'){const v=this.value.trim();if(v)navigate('#search/'+encodeURIComponent(v))}"
            class="w-full bg-[#3E3636] rounded-full py-2 pl-10 pr-4 text-sm border-0 text-[#F5EDED] placeholder-[#F5EDED]/40 focus:bg-[#3E3636] focus:ring-2 focus:ring-[#D72323]/40 transition-all">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 text-[#F5EDED]/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
      </div>
    </header>
  `;
}
