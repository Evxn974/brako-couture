/* =========================================================
   BRAKO(R) -- MAIN.JS
   Logique du site : slider, boutique, filtres, menu mobile,
   animations au scroll, panier (demo).
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  initHeader();
  initHero();
  initShop();
  initLookbook();
  initMobileNav();
  initReveal();
  initNewsletter();
  initSmoothScroll();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- HEADER ---------- */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
}

/* ---------- HERO SLIDER ---------- */
function initHero() {
  const wrap = document.getElementById('hero-slides');
  const dotsWrap = document.getElementById('hero-dots');
  if (!wrap || typeof BRAKO_HERO_SLIDES === 'undefined') return;

  BRAKO_HERO_SLIDES.forEach(function (slide, i) {
    const el = document.createElement('div');
    el.className = 'hero-slide' + (i === 0 ? ' active' : '');
    el.innerHTML = '<img src="' + slide.image + '" alt="' + slide.title + '">' +
      '<div class="hero-content">' +
      '<h1 class="hero-title">' + slide.title + '</h1>' +
      '<p class="hero-subtitle">' + slide.subtitle + '</p>' +
      '<a class="hero-cta" href="' + slide.link + '">' + slide.cta + '</a>' +
      '</div>';
    wrap.appendChild(el);

    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', function () { goToSlide(i); });
    dotsWrap.appendChild(dot);
  });

  const slides = wrap.querySelectorAll('.hero-slide');
  const dots = dotsWrap.querySelectorAll('.hero-dot');
  let current = 0;

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  setInterval(function () {
    goToSlide((current + 1) % slides.length);
  }, 5500);
}

/* ---------- SHOP ---------- */
let cartCount = 0;

function initShop() {
  const grid = document.getElementById('shop-grid');
  if (!grid || typeof BRAKO_PRODUCTS === 'undefined') return;

  function renderProducts(filter) {
    grid.innerHTML = '';
    const list = filter === 'tous' ? BRAKO_PRODUCTS : BRAKO_PRODUCTS.filter(function (p) { return p.category === filter; });
    list.forEach(function (p) {
      const imgA = p.images[0];
      const imgB = p.images[1] || p.images[0];
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML =
        '<div class="product-media">' +
        (p.tag ? '<span class="product-tag">' + p.tag + '</span>' : '') +
        '<img class="img-a" src="' + imgA + '" alt="' + p.name + '">' +
        '<img class="img-b" src="' + imgB + '" alt="' + p.name + '">' +
        '</div>' +
        '<div class="product-info">' +
        '<div class="product-name">' + p.name + '</div>' +
        '<div class="product-colors">' + p.colors.join(' / ') + '</div>' +
        '<div class="product-row">' +
        '<span class="product-price">' + p.price + '&euro;</span>' +
        '<button class="add-btn" data-name="' + p.name + '">Ajouter</button>' +
        '</div></div>';
      grid.appendChild(card);
    });
    requestAnimationFrame(function () {
      document.querySelectorAll('.product-card').forEach(function (c) { c.classList.add('reveal'); });
    });
    grid.querySelectorAll('.add-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
        showToast('Ajoute au panier (demo) : ' + btn.dataset.name);
      });
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });

  renderProducts('tous');
}

/* ---------- LOOKBOOK ---------- */
function initLookbook() {
  const grid = document.getElementById('lookbook-grid');
  if (!grid || typeof BRAKO_LOOKBOOK === 'undefined') return;
  BRAKO_LOOKBOOK.forEach(function (item) {
    const el = document.createElement('div');
    el.className = 'lookbook-item';
    el.innerHTML = '<img src="' + item.image + '" alt="BRAKO lookbook">' +
      '<div class="lookbook-caption">' + item.caption + '</div>';
    grid.appendChild(el);
  });
}

/* ---------- MOBILE NAV ---------- */
function initMobileNav() {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!burger || !mobileNav) return;
  burger.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
  });
}

/* ---------- REVEAL ON SCROLL ---------- */
function initReveal() {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  function observeAll() {
    document.querySelectorAll('.product-card, .lookbook-item').forEach(function (el) {
      observer.observe(el);
    });
  }
  setTimeout(observeAll, 300);
}

/* ---------- NEWSLETTER (demo) ---------- */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('Merci ! Inscription enregistree (demo).');
    form.reset();
  });
}

/* ---------- SMOOTH SCROLL ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---------- TOAST ---------- */
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2600);
}
