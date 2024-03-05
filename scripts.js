let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Automatically advance slides every 3 seconds
setInterval(nextSlide, 3000);


function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar-links');
    sidebar.classList.toggle('open'); // Toggle the 'open' class
    var content = document.querySelector('.side-nav-dropdown');
    content.classList.toggle('open');
    
}