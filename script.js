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

// Path to the images folder
const imagesPath = "/Website/Images/Ads";

// List of image filenames (Update this list if more images are added)
const images = [
    "Computer_Repairs_Ad.jpg",
    "Ad2.jpg",
    "Ad3.jpg",
    // Add more images as needed
];

// Select the image element in the HTML
const imageElement = document.querySelector(".contact-photo img");

// Index to keep track of the current image
let currentIndex = 0;

// Function to update the image source
function updateImage() {
    // Update the src attribute with the current image
    imageElement.src = `${imagesPath}/${images[currentIndex]}`;
    
    // Move to the next image, or loop back to the first
    currentIndex = (currentIndex + 1) % images.length;
}

// Initial call to set the first image
updateImage();

// Set the interval to change images every 5 seconds
setInterval(updateImage, 5000);
