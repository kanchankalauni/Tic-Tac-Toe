const ticTac = document.querySelector('.ticTac')
let currentPlayer = 'X'

ticTac.addEventListener('click', (e) => {
    if (e.target.innerText === "") {
        e.target.textContent = currentPlayer
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'
    }
    
})