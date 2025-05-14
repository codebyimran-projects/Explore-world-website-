
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeIcon = document.getElementById('close-icon');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });




  // hero section 

  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 6000); // Change slide every 6 seconds

