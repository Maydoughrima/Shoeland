const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu'); // Make sure this exists in your HTML

// Open menu
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.classList.add('no-scroll'); // Prevent background scroll
});

// Close menu
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('no-scroll'); // Allow scroll again
});

// CTA button activation (this part looks good)
const ctaButtons = document.querySelectorAll('.ctaU, .ctaM, .ctaW, .ctaK');

ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    ctaButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

  

  
