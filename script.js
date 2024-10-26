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

// Array to store image paths (make sure to add actual image filenames to this array)
const adImages = [
    "/Website/Images/Ads/Computer_Repairs_Ad.jpg",
    "/Website/Images/Ads/A4_Ad-Email.jpg",
    "/Website/Images/Ads/WiFi_Services_Facebook_Ad.jpg",
    // Add more images as needed
];

let currentImageIndex = 0;

// Function to change the advertisement image
function changeImage() {
    const adElement = document.getElementById("advertisement-image");
    adElement.src = adImages[currentImageIndex];

    // Update index to show the next image in the array
    currentImageIndex = (currentImageIndex + 1) % adImages.length;
}

// Start cycling images every 5 seconds
setInterval(changeImage, 5000);

// Initial call to set the first image
changeImage();
