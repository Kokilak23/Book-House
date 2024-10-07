function validateLogin() {
    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are not empty
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
    }

    // Simulate authentication (replace with actual authentication logic)
    if (username === 'demo' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform further actions
    } else {
        alert('login successfully!.');
    }
}