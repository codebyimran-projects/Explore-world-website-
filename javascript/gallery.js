
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeIcon = document.getElementById('close-icon');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });

// Filterable Gallery 

  const tabButtons = document.querySelectorAll('.tab-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.tab-btn.active').classList.remove('active');
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      galleryCards.forEach(card => {
        const match = category === 'all' || card.getAttribute('data-category') === category;
        card.style.display = match ? 'block' : 'none';
      });
    });
  });

// overlay js 

    const lightboxOverlay = document.getElementById("lightbox-overlay");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.getElementById("lightbox-close");

  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxOverlay.style.display = "flex";
    });
  });

  closeBtn.addEventListener('click', () => {
    lightboxOverlay.style.display = "none";
    lightboxImage.src = "";
  });

  lightboxOverlay.addEventListener('click', e => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.style.display = "none";
      lightboxImage.src = "";
    }
  });


