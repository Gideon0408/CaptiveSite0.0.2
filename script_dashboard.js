document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        document.getElementById('usernamePassword').textContent = `Username: ${userData.username}, Password: ${userData.password}`;
        document.getElementById('roomPassword').textContent = `Room: ${userData.room}, Password: ${userData.password}`;
        document.getElementById('passwordOnly').textContent = `Password: ${userData.password}`;
    } else {
        document.getElementById('usernamePassword').textContent = 'No data available';
        document.getElementById('roomPassword').textContent = 'No data available';
        document.getElementById('passwordOnly').textContent = 'No data available';
    }
});
