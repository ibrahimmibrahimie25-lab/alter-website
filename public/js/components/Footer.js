function Footer() {
  return `
    <footer class="bg-[#000000] text-[#F5EDED] mt-20 border-t border-[#3E3636]/50">
      <div class="container py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="mb-4">
              <span class="font-bold text-lg">KJO <span class="text-[#D72323]">ALTER</span></span>
            </div>
            <p class="text-[#F5EDED]/50 text-sm leading-relaxed max-w-sm">Bold fashion for those who dare to stand out.</p>
          </div>
          <div>
            <h4 class="font-semibold text-sm uppercase tracking-wider text-[#F5EDED]/70 mb-4">Shop</h4>
            <ul class="space-y-2.5">
              <li><a href="#categories" class="text-[#F5EDED]/50 text-sm hover:text-[#D72323] transition-colors">All Categories</a></li>
              <li><a href="#cart" class="text-[#F5EDED]/50 text-sm hover:text-[#D72323] transition-colors">Cart</a></li>
              <li><a href="#categories" class="text-[#F5EDED]/50 text-sm hover:text-[#D72323] transition-colors">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-sm uppercase tracking-wider text-[#F5EDED]/70 mb-4">Support</h4>
            <ul class="space-y-2.5">
              <li><a href="#" class="text-[#F5EDED]/50 text-sm hover:text-[#D72323] transition-colors">Contact</a></li>
              <li><a href="#" class="text-[#F5EDED]/50 text-sm hover:text-[#D72323] transition-colors">FAQ</a></li>
              <li><a href="#" class="text-[#F5EDED]/50 text-sm hover:text-[#D72323] transition-colors">Shipping</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-[#3E3636]/50 mt-10 pt-6 text-center text-[#F5EDED]/40 text-xs">
          &copy; 2026 KJO ALTER. All rights reserved.
        </div>
      </div>
    </footer>
  `;
}
