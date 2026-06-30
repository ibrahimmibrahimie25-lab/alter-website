async function SearchPage(query) {
  const q = decodeURIComponent(query);
  const products = await API.searchProducts(q);
  return `
    <section class="container py-8 md:py-16">
      <div class="mb-8 animate-fade-in">
        <a href="#home" class="inline-flex items-center gap-1 text-sm text-[#F5EDED]/50 hover:text-[#D72323] transition-colors mb-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
          Home
        </a>
        <h1 class="text-2xl md:text-4xl font-bold text-[#F5EDED]">Search results</h1>
        <p class="text-[#F5EDED]/50 mt-1">
          ${products.length} ${products.length === 1 ? 'result' : 'results'} for "<span class="font-medium text-[#F5EDED]">${q}</span>"
        </p>
      </div>
      ${products.length === 0 ? `
        <div class="text-center py-20">
          <div class="w-20 h-20 mx-auto mb-5 rounded-full bg-[#3E3636] flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D72323" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <h2 class="text-xl font-bold text-[#F5EDED] mb-2">No products found</h2>
          <p class="text-[#F5EDED]/50 mb-6">Try a different search term or browse categories.</p>
          <a href="#categories" class="inline-flex items-center gap-2 bg-[#D72323] text-[#F5EDED] font-semibold px-6 py-3 rounded-full hover:bg-[#b01c1c] transition-all">
            Browse Categories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      ` : `
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          ${products.map(p => ProductCard(p)).join('')}
        </div>
      `}
    </section>
    ${Footer()}
  `;
}
