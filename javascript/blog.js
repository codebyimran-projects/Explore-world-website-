
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});



const blogPosts = [
    { title: "Unveiling the Secrets of Petra", category: "history", img: "Petra.jpg", desc: "Discover the ancient rose-red city and why it’s a must-visit destination." },
    { title: "The Love Story Behind the Taj Mahal", category: "culture", img: "taj mahal.jpg", desc: "Unravel the romantic legend that built the world's iconic monument." },
    { title: "Inside Rome’s Colosseum", category: "history", img: "colosseum-sunset.jpg", desc: "Step into ancient Rome's entertainment colosseum." },
    { title: "Exploring Machu Picchu", category: "adventure", img: "machu-picchu-mountains.jpg", desc: "Trek the mystical mountain city above the clouds." },
    { title: "Mystery of Chichen Itza", category: "architecture", img: "chichen itza.jpg", desc: "Dive into the Mayan pyramid's ancient genius." },
    { title: "Why Visit Christ the Redeemer?", category: "culture", img: "christ-redeemer-rio.jpg", desc: "A cultural icon of Brazil and global peace." },
    { title: "The Great Wall's Hidden Trails", category: "adventure", img: "great wall of china.jpg", desc: "Hike beyond the tourist trails of this wonder." },
    { title: "History of the Acropolis", category: "history", img: "acropolis.jpg", desc: "Explore Greece's historical heights." },
    { title: "Inca Roads and Ruins", category: "adventure", img: "inca-trails.jpg", desc: "The expansive network beyond Machu Picchu." },
    { title: "Architectural Genius of Alhambra", category: "architecture", img: "alhambra.jpg", desc: "Moorish marvels in Spanish history." },
    { title: "Desert Cities of Jordan", category: "culture", img: "wadi-rum.jpg", desc: "Hidden gems beyond Petra." },
    { title: "Temple of Artemis Reimagined", category: "history", img: "artemis-temple.jpg", desc: "One of the original ancient wonders." }
];

const grid = document.getElementById('blogGrid');
const pagination = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

let currentPage = 1;
const perPage = 6;

function displayBlogs(posts) {
    grid.innerHTML = "";
    const start = (currentPage - 1) * perPage;
    const selected = posts.slice(start, start + perPage);

    selected.forEach(post => {
        grid.innerHTML += `
        <div class="blog-card">
          <img src="../assets/images/${post.img}" alt="${post.title}">
          <div class="blog-content">
            <h3>${post.title}</h3>
            <p>${post.desc}</p>
            <a href="#" class="read-more">Read More →</a>
          </div>
        </div>
      `;
    });
}

function updatePagination(posts) {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(posts.length / perPage);
    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentPage = i;
            displayBlogs(filteredPosts());
            updatePagination(filteredPosts());
        });
        pagination.appendChild(btn);
    }
}

function filteredPosts() {
    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    return blogPosts.filter(post =>
        post.title.toLowerCase().includes(search) &&
        (category === "" || post.category === category)
    );
}

// Initial Render
displayBlogs(blogPosts);
updatePagination(blogPosts);

// Events
searchInput.addEventListener('input', () => {
    currentPage = 1;
    displayBlogs(filteredPosts());
    updatePagination(filteredPosts());
});
categoryFilter.addEventListener('change', () => {
    currentPage = 1;
    displayBlogs(filteredPosts());
    updatePagination(filteredPosts());
});