// Select all form elements
const form = document.getElementById("myForm");
const usernameField = document.getElementById("username");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("secondPassword");

// Real-Time Validation for each input

// Validate Username
usernameField.addEventListener("input", () => {
    const username = usernameField.value;
    if (username.length < 3 || username.length > 8) {
        document.getElementById("usernameError").textContent = "Username must be between 3 and 8 characters.";
        usernameField.classList.remove('highlight-color-red'); // Remove success class
        usernameField.classList.add('highlight-color-green');
    } else {
        document.getElementById("usernameError").textContent = "";
        usernameField.classList.remove('highlight-color-green'); // Remove success class
        usernameField.classList.add('highlight-color-red');
    }
});

// Validate Email
emailField.addEventListener("input", () => {
    const email = emailField.value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        emailField.classList.remove('highlight-color-green'); // Remove success class
        emailField.classList.add('highlight-color-red');
    } else {
        document.getElementById("emailError").textContent = "";
        emailField.classList.remove('highlight-color-green'); // Remove success class
        emailField.classList.add('highlight-color-red');
    }
});

// Validate Password
passwordField.addEventListener("input", () => {
    const password = passwordField.value;
    if (password.length < 6 || password.length > 8) {
        document.getElementById("passwordError").textContent = "Password must be between 6 and 8 characters.";
        passwordField.classList.remove('highlight-color-green'); // Remove success class
        passwordField.classList.add('highlight-color-red');
    } else {
        document.getElementById("passwordError").textContent = "";
        passwordField.classList.remove('highlight-color-red'); // Remove success class
        passwordField.classList.add('highlight-color-green');
    }
});

// Confirm Password
confirmPasswordField.addEventListener("input", () => {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;
    if (password !== confirmPassword) {
        document.getElementById("passwordError").textContent = "Passwords do not match.";
        confirmPasswordField.classList.remove('highlight-color-green'); // Remove success class
        confirmPasswordField.classList.add('highlight-color-red');          
    } else {
        document.getElementById("passwordError").textContent = "";
        confirmPasswordField.classList.remove('highlight-color-red'); // Remove success class
        confirmPasswordField.classList.add('highlight-color-green'); 
    }
});

const blockedUsernamesList = ['root', 'test', 'admin', 'godfather']
const accessBlockedUsernamesList = 

// Form submission validation
form.addEventListener("submit", function(event) {
    let isValid = true;

    // Final checks before form submission
    // Username Validation
    if (usernameField.value.length < 3 || usernameField.value.length > 8) {
        document.getElementById("usernameError").textContent = "Username must be between 3 and 8 characters.";
        isValid = false;
    }
    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailField.value.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }
    // Password Validation
    if (passwordField.value.length < 6 || passwordField.value.length > 8) {
        document.getElementById("passwordError").textContent = "Password must be between 6 and 8 characters.";
        isValid = false;
    }
    // Confirm Password Validation
    if (passwordField.value !== confirmPasswordField.value) {
        document.getElementById("passwordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    // If any field is invalid, prevent form submission
    if (!isValid) {
        event.preventDefault();  // Prevent form from submitting
    }
});
