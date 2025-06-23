const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.classList.add('no-scroll');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

// CTA Button Active State (Optional)
const ctaButtons = document.querySelectorAll('.ctaU, .ctaM, .ctaW, .ctaK');
ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    ctaButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Search Overlay Toggle
const searchIcon = document.getElementById('search-toggle');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const openSearch = document.getElementById('open-search');
const closeSearch = document.getElementById('close-search');
const searchOverlay = document.getElementById('open-page');

searchIcon.addEventListener('click', () => {
  if (window.innerWidth <= 1118) {
    searchOverlay.classList.add('active');
    document.body.classList.add('no-scroll');
    searchInput.focus();
  }
});

closeSearch.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
});


  
