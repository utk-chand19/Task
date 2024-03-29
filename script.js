document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get username and password values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check credentials (for demonstration purposes, using simple validation)
        if (username === 'user' && password === 'pass') {
            // Redirect to welcome.html if credentials are correct
            window.location.href = 'welcome.html';
        } else {
            // Display error message if credentials are incorrect
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});