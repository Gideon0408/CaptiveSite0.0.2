document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform login validation here
        if (username === 'admin' && password === '1') {
            // If login is successful, redirect to the admin dashboard
            window.location.href = 'admin_dashboard.html';
        } else {
            // Handle invalid login
            alert('Invalid username or password');
        }
    });
});
