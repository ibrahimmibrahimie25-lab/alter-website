async function ProductListPage(subcategoryId) {
  const [subcategory, products] = await Promise.all([
    API.getSubcategory(subcategoryId),
    API.getProducts(subcategoryId),
  ]);
  if (!subcategory) return '<div class="container py-20 text-center text-[#F5EDED]/50">Subcategory not found.</div>';
  return `
    <section class="container py-8 md:py-16">
      <div class="mb-8 animate-fade-in">
        <a href="javascript:history.back()" class="inline-flex items-center gap-1 text-sm text-[#F5EDED]/50 hover:text-[#D72323] transition-colors mb-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
          Back
        </a>
        <h1 class="text-2xl md:text-4xl font-bold text-[#F5EDED]">${subcategory.name}</h1>
        <p class="text-[#F5EDED]/50 mt-1">${products.length} products available</p>
      </div>
      ${products.length === 0 ? '<div class="text-center py-20 text-[#F5EDED]/40">No products found in this category yet.</div>' : `
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          ${products.map(p => ProductCard(p)).join('')}
        </div>
      `}
    </section>
    ${Footer()}
  `;
}
