const menuToggle = document.getElementById('menuToggle');
    const menuItems = document.getElementById('menuItems');
    const menuButton = document.getElementById('menuButton');
    const menuIcon = document.getElementById('menuIcon');

    menuToggle.addEventListener('change', function () {
        menuItems.style.display = this.checked ? 'flex' : 'none';
        menuIcon.textContent = this.checked ? '✕' : '☰';
    });

    // Hide the menu items when clicking outside the menu on smaller screens
    menuToggle.addEventListener('click', function (event) {
        if (menuToggle.checked && !menuItems.contains(event.target) && event.target !== menuToggle) {
            menuToggle.checked = false;
            menuItems.style.display = 'none';
            menuIcon.textContent = '☰'; // Reset to hamburger menu icon
        }
    });

    // Close the navbar and reset the icon when a navlink is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
            menuItems.style.display = 'none';
            menuIcon.textContent = '☰'; // Reset to hamburger menu icon
        });
    });