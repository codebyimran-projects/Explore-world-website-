
//   navbar section js 
  
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeIcon = document.getElementById('close-icon');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });


//   review section js 
  const slider = document.querySelector('.reviews-slider');

  let isDown = false;
  let startX;
  let scrollLeft;
  let velocity = 0;
  let momentumID;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
  });

  slider.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      beginMomentumTracking();
    }
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      beginMomentumTracking();
    }
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    const prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velocity = slider.scrollLeft - prevScrollLeft;
  });

  // Touch events for mobile
  slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
  });

  slider.addEventListener('touchend', () => {
    isDown = false;
    beginMomentumTracking();
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    const prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velocity = slider.scrollLeft - prevScrollLeft;
  });

  // Momentum function for smooth continued scroll after drag release
  function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  }

  function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID);
  }

  function momentumLoop() {
    slider.scrollLeft += velocity;
    velocity *= 0.95; // friction

    if (Math.abs(velocity) > 0.5) {
      momentumID = requestAnimationFrame(momentumLoop);
    }
  }


//   faq 


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');
  questionBtn.addEventListener('click', () => {
    // Close other open items
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
    // Toggle current
    item.classList.toggle('active');
  });
});
