async function SubcategoriesPage(categoryId) {
  const allCats = await API.getCategories();
  const category = allCats.find(c => c.id == categoryId);
  if (!category) return '<div class="container py-20 text-center text-[#F5EDED]/50">Category not found.</div>';
  const subcategories = await API.getSubcategories(categoryId);
  return `
    <section class="container py-12 md:py-20">
      <div class="mb-8 md:mb-12 animate-fade-in">
        <a href="#categories" class="inline-flex items-center gap-1 text-sm text-[#F5EDED]/50 hover:text-[#D72323] transition-colors mb-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
          All Categories
        </a>
        <h1 class="text-3xl md:text-4xl font-bold text-[#F5EDED]">${category.name}</h1>
        <p class="text-[#F5EDED]/50 mt-2">Choose a subcategory to browse products.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
        ${subcategories.map(sub => `
          <a href="#products/${sub.id}" class="card-hover bg-[#3E3636] rounded-2xl p-6 md:p-8 text-center shadow-sm animate-scale-in group">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#3E3636] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#D72323]">
              <svg class="text-[#D72323] transition-colors duration-300 group-hover:text-[#F5EDED]" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18"/><path d="M9 22V9"/>
              </svg>
            </div>
            <h3 class="text-[#F5EDED] font-semibold text-base md:text-lg group-hover:text-[#D72323] transition-colors">${sub.name}</h3>
            <span class="text-xs text-[#F5EDED]/40 mt-1 inline-block">View Products →</span>
          </a>
        `).join('')}
      </div>
    </section>
    ${Footer()}
  `;
}
