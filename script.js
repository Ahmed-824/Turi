document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Basic validation
    if (!username || !password) {
        errorMessage.textContent = 'Please fill in both fields.';
        return;
    }

    // Simulated backend login logic for demonstration purposes
    authenticateUser(username, password).then(isAuthenticated => {
        if (isAuthenticated) {
            alert('Login successful!');
            // Redirect to home page
            window.location.href = 'home.html';
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        }
    }).catch(error => {
        errorMessage.textContent = 'An error occurred. Please try again later.';
        console.error('Login error:', error);
    });
});

// Simulated backend authentication function
function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        // Simulated delay for backend processing
        setTimeout(() => {
            if (username === 'admin' && password === 'password123') {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000);
    });
}
