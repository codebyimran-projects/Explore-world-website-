
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeIcon = document.getElementById('close-icon');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });

// search bar filter 

  const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const placeCards = document.querySelectorAll('.place-card');

function filterPlaces() {
  const searchTerm = searchInput.value.toLowerCase();
  const filterTerm = filterSelect.value.toLowerCase();

  placeCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const category = card.dataset.category ? card.dataset.category.toLowerCase() : '';

    const matchesSearch = name.includes(searchTerm);
    const matchesFilter = filterTerm === '' || category === filterTerm;

    if (matchesSearch && matchesFilter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterPlaces);
filterSelect.addEventListener('change', filterPlaces);


// pagination js 

const cards = document.querySelectorAll('.place-card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

const cardsPerPage = 6;
let currentPage = 1;
const totalPages = Math.ceil(cards.length / cardsPerPage);

function showPage(page) {
  // Hide all cards initially
  cards.forEach(card => (card.style.display = 'none'));

  // Calculate start and end index
  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  // Show cards for current page
  for (let i = start; i < end && i < cards.length; i++) {
    cards[i].style.display = 'flex';
  }

  // Update page info and button states
  pageInfo.textContent = `Page ${page} of ${totalPages}`;
  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === totalPages;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});

// Initialize
showPage(currentPage);
