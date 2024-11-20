const Isesion = document.querySelector('#Isesion')
Isesion.addEventListener('submit', (e) =>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario o Contraseña incorrectos')
    }
    alert('Bienvenido')
    localStorage.setItem('login_succes', JSON.stringify(validUser))
    window.location.href = 'perfil.html'
})