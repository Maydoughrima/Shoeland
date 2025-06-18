const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu')

hamburger.addEventListener('click',()=>{
    mobileMenu.classList.toggle('active');
});

  const ctaButtons = document.querySelectorAll('.ctaU, .ctaM, .ctaW, .ctaK');

  ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all
      ctaButtons.forEach(btn => btn.classList.remove('active'));

      // Add 'active' to the clicked one
      button.classList.add('active');
    });
  });

  
