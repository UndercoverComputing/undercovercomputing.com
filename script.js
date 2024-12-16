function copyEmail(event) {
    event.preventDefault();
    navigator.clipboard.writeText("lewis@undercovercomputing.com").then(() => {
        const message = document.getElementById("confirmation-message");
        message.style.display = "block";
        setTimeout(() => { message.style.display = "none"; }, 8000);
    });
}

const slider = (() => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider img');
    const indicators = document.querySelectorAll('.indicator');

    if (images.length === 0 || indicators.length !== images.length) return;

    function showImage(index) {
        images[currentIndex].style.opacity = '0';
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        images[currentIndex].style.opacity = '1';
        indicators[currentIndex].classList.add('active');
    }

    function showNextImage() {
        showImage((currentIndex + 1) % images.length);
    }

    setInterval(showNextImage, 5000);
    indicators.forEach((indicator, i) => indicator.addEventListener('click', () => showImage(i)));
    showImage(0);
})();