function copyEmail(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();

    // Copy the email to clipboard
    navigator.clipboard.writeText("undercover.computing@gmail.com").then(function() {
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
const indicators = document.querySelectorAll('.indicator');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.opacity = '0'; // Fade out current image
    indicators[currentIndex].classList.remove('active'); // Remove active class from current indicator
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.opacity = '1'; // Fade in next image
    indicators[currentIndex].classList.add('active'); // Add active class to new indicator
}

// Initialize the slider by hiding all images except the first one
images.forEach((img, index) => {
    img.style.opacity = index === 0 ? '1' : '0'; // Set initial opacity
});

// Automatically change the image every 5 seconds
setInterval(showNextImage, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Facebook stuff
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1719717172121565',
        xfbml      : true,
        version    : 'v21.0'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
  const fadeInContainers = document.querySelectorAll("main .fade-in-container");

  const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  fadeInContainers.forEach(container => {
    Array.from(container.children).forEach(element => observer.observe(element));
  });
});
