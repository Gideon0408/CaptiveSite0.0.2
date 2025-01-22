document.addEventListener('DOMContentLoaded', function() {
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const addUserForm = document.getElementById('addUserForm');

    // Retrieve user data from localStorage
    let userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Function to display user data in the table
    function displayUserData() {
        userTable.innerHTML = '';
        userData.forEach(user => {
            const row = userTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = user.name;
            cell2.textContent = user.password;
        });
    }

    // Display user data on page load
    displayUserData();

    // Handle form submission to add new user
    addUserForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newName = document.getElementById('newName').value;
        const newPassword = document.getElementById('newPassword').value;

        // Add new user to userData array
        userData.push({ name: newName, password: newPassword });

        // Save updated userData to localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Display updated user data
        displayUserData();

        // Clear form inputs
        addUserForm.reset();
    });
});
