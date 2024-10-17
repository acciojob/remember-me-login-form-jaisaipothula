document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');
    
    // Check if there are saved credentials in local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'block'; // Show existing user button
    }

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            // Save credentials in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Remove credentials from local storage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`); // Display alert

        // Reset form fields
        loginForm.reset();
        
        // Show existing user button if not already shown
        if (rememberMe) {
            existingButton.style.display = 'block';
        }
    });

    // Handle existing user login
    existingButton.addEventListener('click', () => {
        alert(`Logged in as ${savedUsername}`); // Display alert for existing user
    });
});