document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Example validation: check if the email is not empty
        const email = document.getElementById("email");
        if (!email.value) {
            alert("Email is required.");
            isValid = false;
        }
        const username = document.getElementById("username");
        const usernameRegex = /^[a-zA-Z0-9]{6,}$/;
        if (!usernameRegex.test(username.value)) {
            alert("Username must be at least 6 characters long and include only letters and numbers.");
            isValid = false;
        }
        const password = document.getElementById("password");
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!passwordRegex.test(password.value)) {
            alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character.");
            isValid = false;
        }

        // Add more validations as needed
        // ...

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});