document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('regName').value;
    const password = document.getElementById('regPassword').value;

    // Save user data in a folder (for demonstration purposes, using localStorage)
    const userData = { name: name, password: password };
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Registration successful');
    window.location.href = 'index.html';
});
