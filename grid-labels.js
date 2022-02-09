const gameBoardDiv = document.getElementById('gameBoard')

const columns = 7
const rows = 7

for (let col = 1; col <= columns; col++) {
    for (let row = 1; row <= rows; row++) {
        const cellCode = String.fromCharCode(64 + col) + row

        const gridDiv = document.createElement('div')
        gridDiv.classList.add('grid')
        gridDiv.innerHTML = cellCode
        gridDiv.id = cellCode

        gridDiv.addEventListener('click', () => {
            gridDiv.classList.toggle('selected')

            // do a func here with yo shit
        })

        gameBoardDiv.appendChild(gridDiv)
    }
}