document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('Name').value;
    const password = document.getElementById('Password').value;

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Validate login credentials
    if (userData && userData.name === name && userData.password === password) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid login credentials');
    }
});
