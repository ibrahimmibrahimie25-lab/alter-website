async function CategoriesPage() {
  const categories = await API.getCategories();
  return `
    <section class="container py-12 md:py-20">
      <div class="text-center mb-10 md:mb-14 animate-fade-in">
        <a href="#home" class="inline-flex items-center gap-1 text-sm text-[#F5EDED]/50 hover:text-[#D72323] transition-colors mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
          Home
        </a>
        <h1 class="text-3xl md:text-5xl font-bold text-[#F5EDED]">Shop by Category</h1>
        <p class="text-[#F5EDED]/50 mt-3 max-w-lg mx-auto">Browse our curated collections.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-6">
        ${categories.map(cat => `<div class="w-80">${CategoryCard(cat)}</div>`).join('')}
      </div>
    </section>
    ${Footer()}
  `;
}
