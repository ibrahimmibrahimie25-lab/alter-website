function Hero() {
  return `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background: transparent;">
      <div class="relative z-10 text-center px-6">
        <div class="morphing-text-container mx-auto mb-8" id="morphingHero">
        </div>
        <p class="text-lg md:text-xl text-[#F5EDED]/60 leading-relaxed max-w-lg mx-auto mb-10 animate-fade-in stagger-4">
          Redefine your style with bold, unapologetic fashion.
        </p>
        <div class="animate-fade-in stagger-5">
          <a href="#categories" class="btn-primary inline-flex items-center gap-2.5 bg-[#D72323] text-[#F5EDED] font-bold px-10 py-4 rounded-full text-base hover:bg-[#b01c1c] transition-all shadow-lg shadow-[#D72323]/25">
            Shop Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
      <div class="absolute bottom-8 left-0 right-0 text-center animate-fade-in stagger-5">
        <div class="inline-flex flex-col items-center gap-2 text-[#F5EDED]/40 text-xs uppercase tracking-[0.15em]">
          <span>Scroll</span>
          <div class="w-px h-8 bg-gradient-to-b from-[#F5EDED]/40 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  `;
}
