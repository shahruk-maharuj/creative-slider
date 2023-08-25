document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.hero-slider');
    const items = document.querySelectorAll('.item');
    const nextButton = document.querySelector('.button-arrows .next');
    const prevButton = document.querySelector('.button-arrows .prev');
    let currentIndex = 0;

    // Function to move to the next slide
    function nextSlide() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
        updateSliderPosition();
    }

    // Function to move to the previous slide
    function prevSlide() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].classList.add('active');
        updateSliderPosition();
    }

    // Function to update the slider's position
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listeners for next and previous buttons
    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        nextSlide();
    });

    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        prevSlide();
    });

    // Optional: Automatic slide change every 5 seconds
    setInterval(nextSlide, 5000);
});
