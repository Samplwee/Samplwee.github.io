const user = JSON.parse(localStorage.getItem('login_succes') || false)
if(!user){
  window.location.href = 'login.html'
}

const logout = document.querySelector('#Csesion')

logout.addEventListener('click', ()=>{
    alert('Apagando Sistema')
    localStorage.removeItem('login_succes')
    window.location.href = 'index.html'
})