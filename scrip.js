document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('password-form');
    const siteInput = document.getElementById('site');
    const passwordInput = document.getElementById('password');
    const passwordList = document.getElementById('password-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const site = siteInput.value;
        const password = passwordInput.value;

        if (site.trim() === '' || password.trim() === '') {
            alert('Por favor, ingresa el sitio web y la contraseña.');
            return;
        }

        const passwordItem = document.createElement('li');
        passwordItem.textContent = `${site}: ${password}`;
        passwordList.appendChild(passwordItem);

        // Guardar contraseña en localStorage
        localStorage.setItem(site, password);

        // Limpiar los campos de entrada
        siteInput.value = '';
        passwordInput.value = '';
    });

    // Cargar contraseñas almacenadas en localStorage al cargar la página
    for (let i = 0; i < localStorage.length; i++) {
        const site = localStorage.key(i);
        const password = localStorage.getItem(site);
        const passwordItem = document.createElement('li');
        passwordItem.textContent = `${site}: ${password}`;
        passwordList.appendChild(passwordItem);
    }
});