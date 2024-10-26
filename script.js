function copyEmail() {
    // Copy the email to clipboard
    navigator.clipboard.writeText("undercovercomputing@gmail.com").then(function() {
      // Display the confirmation message
      document.getElementById("confirmation-message").style.display = "block";
      
      // Hide the confirmation message after a few seconds
      setTimeout(function() {
        document.getElementById("confirmation-message").style.display = "none";
      }, 2000);
    });
  }
