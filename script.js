const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('nextSlide').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

document.getElementById('prevSlide').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
