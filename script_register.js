document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username') ? document.getElementById('username').value : null;
    const roomNumber = document.getElementById('roomNumber') ? document.getElementById('roomNumber').value : null;
    const password = document.getElementById('password').value;

    const userData = {
        username: username,
        roomNumber: roomNumber,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Registration successful');
    window.location.href = 'index_username_password.html';
});
