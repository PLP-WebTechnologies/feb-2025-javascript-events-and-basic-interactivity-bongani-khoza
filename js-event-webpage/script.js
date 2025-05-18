// This script validates a form with fields for name, email, and password.

// Function to validate the email field
document.getElementById("email").addEventListener("input", function() {
    const email = this.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (regex.test(email)) {
        console.log("Valid email address");
    } else {
        console.log("Invalid email address");
    }
});

// Function to validate the password field
document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    
    if (regex.test(password)) {
        console.log("Valid password");
    } else {
        console.log("Invalid password");
    }
});

// Function to change the button color
document.getElementById("changeColorBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("cardWrapper").style.backgroundColor = "#ffcc00"; // Change to desired color
});