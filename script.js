function copyEmail(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();

    // Copy the email to clipboard
    navigator.clipboard.writeText("lewis@undercovercomputing.com").then(function() {
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

if (totalImages === 0 || indicators.length === 0 || indicators.length !== totalImages) {
    console.error("Error: Images or indicators not found or mismatch in count.");
} else {
    function showImage(index) {
        if (index >= 0 && index < totalImages) {
            if (images[currentIndex]) {
                images[currentIndex].style.opacity = '0';
            }
            if (indicators[currentIndex]) {
                indicators[currentIndex].classList.remove('active');
            }
            currentIndex = index;
            if (images[currentIndex]) {
                images[currentIndex].style.opacity = '1';
            }
            if (indicators[currentIndex]) {
                indicators[currentIndex].classList.add('active');
            }
        } else {
            console.error("Index out of bounds:", index);
        }
    }

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % totalImages;
        showImage(nextIndex);
    }

    // Initialize the slider
    if (images.length > 0) {
        showImage(0); // Show the first image
    }
}

// Automatically change the image every 5 seconds
setInterval(showNextImage, 5000);

// Add click event to indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showImage(index); // Show the image corresponding to the clicked indicator
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