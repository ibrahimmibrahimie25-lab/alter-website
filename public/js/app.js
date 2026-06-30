let currentRoute = '';
let particleBg = null;
let ditheringBg = null;

function navigate(hash) {
  if (location.hash !== hash) {
    location.hash = hash || '#home';
  } else {
    renderPage();
  }
}

function getRouteInfo() {
  const hash = location.hash || '#home';
  const parts = hash.slice(1).split('/');
  const route = parts[0] || 'home';
  const param = parts.slice(1).join('/');
  return { route, param };
}

async function renderPage() {
  const { route, param } = getRouteInfo();
  const app = document.getElementById('app');
  if (!app) return;

  const key = route + '/' + param;
  if (key === currentRoute) return;
  currentRoute = key;

  app.innerHTML = Header();

  try {
    const container = document.createElement('div');
    container.id = 'pageContent';
    app.appendChild(container);

    let content;
    switch (route) {
      case 'home':
        document.title = 'KJO ALTER — Redefine Your Style';
        content = await HomePage();
        break;
      case 'categories':
        document.title = 'Categories — KJO ALTER';
        content = await CategoriesPage();
        break;
      case 'subcategories':
        document.title = 'Subcategories — KJO ALTER';
        content = await SubcategoriesPage(param);
        break;
      case 'products':
        document.title = 'Products — KJO ALTER';
        content = await ProductListPage(param);
        break;
      case 'product':
        document.title = 'Product Details — KJO ALTER';
        content = await ProductDetailPage(param);
        break;
      case 'search':
        document.title = 'Search — KJO ALTER';
        content = await SearchPage(param);
        break;
      case 'cart':
        document.title = 'Cart — KJO ALTER';
        content = await CartPage();
        break;
      default:
        currentRoute = '';
        navigate('#home');
        return;
    }
    container.innerHTML = content;
  } catch (err) {
    console.error(err);
    const c = document.getElementById('pageContent');
    if (c) {
      c.innerHTML = `
        <section class="container py-20 text-center">
          <h2 class="text-2xl font-bold text-[#F5EDED] mb-2">Something went wrong</h2>
          <p class="text-[#F5EDED]/50 mb-6">${err.message}</p>
          <a href="#home" class="text-[#D72323] font-medium hover:underline">Go Home</a>
        </section>
      `;
    }
  }

  Store.notify();
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => {
    b.className = 'size-btn px-4 py-2.5 text-sm font-medium rounded-xl border-2 transition-all border-[#3E3636] text-[#F5EDED]/70 hover:border-[#D72323]';
  });
  btn.className = 'size-btn px-4 py-2.5 text-sm font-medium rounded-xl border-2 transition-all border-[#D72323] bg-[#D72323]/10 text-[#D72323] selected';
}

function selectColor(btn) {
  document.querySelectorAll('.color-btn').forEach(b => {
    b.className = 'color-btn px-4 py-2.5 text-sm font-medium rounded-xl border-2 transition-all border-[#3E3636] text-[#F5EDED]/70 hover:border-[#D72323]';
  });
  btn.className = 'color-btn px-4 py-2.5 text-sm font-medium rounded-xl border-2 transition-all border-[#D72323] bg-[#D72323]/10 text-[#D72323] selected';
}

function changeQty(delta) {
  const el = document.getElementById('qty');
  if (!el) return;
  const v = parseInt(el.textContent) + delta;
  if (v < 1) return;
  el.textContent = v;
}

function addToCartDetail(id, name, price, image) {
  const sizeEl = document.querySelector('.size-btn.selected');
  const colorEl = document.querySelector('.color-btn.selected');
  const size = sizeEl ? sizeEl.dataset.size : 'M';
  const color = colorEl ? colorEl.dataset.color : 'Black';
  const qty = parseInt(document.getElementById('qty')?.textContent || '1');
  Store.addItem({ id, name, price, image }, size, color, qty);
  const btn = event.target;
  const orig = btn.textContent;
  btn.textContent = '✓ Added to Cart!';
  btn.style.background = '#3E3636';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
  }, 1500);
}

async function checkout() {
  const cart = Store.getCart();
  if (cart.length === 0) return;
  const total = Store.getTotal();
  try {
    await API.placeOrder(cart, total);
    Store.clear();
    alert('Order placed successfully! Thank you for your purchase.');
    if (location.hash !== '#home') navigate('#home');
    else renderPage();
  } catch (err) {
    alert('Failed to place order. Please try again.');
  }
}

Store.onChange(() => {
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = Store.getCount();
});

function initBackground() {
  const particleCanvas = document.getElementById('particleCanvas');
  const ditheringCanvas = document.getElementById('ditheringCanvas');

  if (ditheringCanvas && typeof DitheringBackground !== 'undefined') {
    ditheringBg = new DitheringBackground(ditheringCanvas, {
      colorBack: '#000000',
      colorFront: '#882222',
      shape: 'swirl',
      type: '4x4',
      pxSize: 8,
      speed: 0.7,
    });
  }

  if (particleCanvas && typeof ParticleBackground !== 'undefined') {
    particleBg = new ParticleBackground(particleCanvas, {
      color: '#D72323',
      trailOpacity: 0.04,
      particleCount: 300,
      speed: 0.6,
    });
  }
}

function handleScrollTransition() {
  const particleCanvas = document.getElementById('particleCanvas');
  if (!particleCanvas) return;

  const startFade = window.innerHeight * 0.3;
  const endFade = window.innerHeight * 1.3;
  const scrollY = window.scrollY;

  let progress = (scrollY - startFade) / (endFade - startFade);
  progress = Math.max(0, Math.min(1, progress));

  const easeProgress = 1 - Math.pow(1 - progress, 2);
  const opacity = 1 - easeProgress;

  particleCanvas.style.opacity = opacity;
  particleCanvas.style.transform = `scale(${1 + progress * 0.05})`;
  particleCanvas.style.filter = `blur(${progress * 3}px)`;
}

function initHeroMorph() {
  const container = document.getElementById('morphingHero');
  if (container && !container._morphInit) {
    container._morphInit = true;
    container.style.cssText = 'position:relative; width:100%; max-width:800px; height:1.5em; margin:0 auto;';
    const morph = new MorphingText(container, ['KJO', 'ALTER']);
  }
}

function toggleCanvases(show) {
  const pc = document.getElementById('particleCanvas');
  const dc = document.getElementById('ditheringCanvas');
  if (pc) pc.style.display = show ? 'block' : 'none';
  if (dc) dc.style.display = show ? 'block' : 'none';
}

const origRender = renderPage;
renderPage = async function() {
  await origRender.call(this);
  const isHome = getRouteInfo().route === 'home';
  toggleCanvases(isHome);
  const app = document.getElementById('app');
  if (app) {
    if (isHome) app.classList.remove('ambient-section');
    else app.classList.add('ambient-section');
  }
  if (isHome) {
    initHeroMorph();
  }
};

window.addEventListener('resize', () => {
  if (ditheringBg && ditheringBg.resize) ditheringBg.resize();
});
window.addEventListener('hashchange', renderPage);
window.addEventListener('scroll', handleScrollTransition);
let cursorGlow = null;

window.addEventListener('DOMContentLoaded', () => {
  initBackground();
  handleScrollTransition();
  renderPage();
  if (typeof CursorGlow !== 'undefined') {
    cursorGlow = new CursorGlow({
      color: '#D72323',
      size: 200,
      blur: 80,
      opacity: 0.45,
      speed: 0.08,
    });
  }
});
