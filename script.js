function copyEmail(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();

    // Copy the email to clipboard
    navigator.clipboard.writeText("undercovercomputing@gmail.com").then(function() {
        // Display the confirmation message
        document.getElementById("confirmation-message").style.display = "block";
        
        // Hide the confirmation message after a few seconds (4x longer)
        setTimeout(function() {
            document.getElementById("confirmation-message").style.display = "none";
        }, 8000); // 8 seconds
    });
}

// Simple Image Slider
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
}

// Initialize the slider by hiding all images except the first one
images.forEach((img, index) => {
    if (index !== 0) img.style.display = 'none';
});

// Automatically change the image every 3 seconds
setInterval(showNextImage, 5000);

// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
