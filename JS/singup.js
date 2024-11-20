document.querySelector('#Rsesion').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector('#password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === email)) {
        return alert('El correo ya está en uso');
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso');
    window.location.href = 'login.html'
});
