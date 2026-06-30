async function HomePage() {
  const categories = await API.getCategories();
  return `
    ${Hero()}
    <div class="ambient-section" style="z-index:3;">
      <section class="container py-12 md:py-20">
        <div class="text-center mb-10 md:mb-14">
          <span class="text-[#D72323] text-xs font-semibold uppercase tracking-[0.2em]">Categories</span>
          <h2 class="text-2xl md:text-4xl font-bold text-[#F5EDED] mt-2">Shop by Category</h2>
          <p class="text-[#F5EDED]/50 mt-2 max-w-md mx-auto">Find exactly what you're looking for.</p>
        </div>
        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
          ${categories.map(cat => `<div class="w-80">${CategoryCard(cat)}</div>`).join('')}
        </div>
      </section>
      <section class="py-12 md:py-16">
        <div class="container">
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div class="flex-1">
              <span class="text-[#D72323] text-xs font-semibold uppercase tracking-[0.2em]">Premium Quality</span>
              <h3 class="text-2xl md:text-3xl font-bold text-[#F5EDED] mt-2 mb-4">Designed for<br>Everyday Comfort</h3>
              <p class="text-[#F5EDED]/60 leading-relaxed">Premium fabrics, attention to detail, and timeless designs that elevate your everyday wardrobe.</p>
            </div>
            <div class="flex-1 rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/seed/lifestyle/600/400" alt="Fashion lifestyle" class="w-full h-auto" loading="lazy">
            </div>
          </div>
        </div>
      </section>
      ${Footer()}
    </div>
  `;
}
