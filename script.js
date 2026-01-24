// Slideshow auto-rotate
let currentSlide = 0;
const slides = document.querySelectorAll('.color-slide');

function rotateSlides() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Start slideshow if slides exist
if (slides.length > 0) {
    setInterval(rotateSlides, 5000);
}

// Rainbow button hover effect
const buttons = document.querySelectorAll('.rainbow-btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.background = 'rgba(255, 255, 255, 0.2)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// Simple page load animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console welcome message
console.log('%c🌈 Welcome to RainbowArt Gallery!', 
    'color: #ff0080; font-size: 16px; font-weight: bold;');
console.log('%cSite by CyberPencil Artist', 
    'color: #00ffaa; font-size: 12px;');
