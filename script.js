const board = document.querySelector('#board')
const colors = ['red', 'blue', 'rgb(204, 255, 0)','rgb(0, 255, 242)'
,'rgb(225, 0, 255)','rgb(13, 255, 0)','rgb(255, 255, 255)','rgb(255, 132, 0)','rgb(0, 72, 255)']
const boxNumber = 960

for (let i = 0; i < boxNumber ; i++) {
    const box = document.createElement('div')
    box.classList.add('box')


    box.addEventListener('mouseover', () => 
    setColor(box))

    box.addEventListener('mouseleave', () => 
    removeColor(box))
    board.append(box)
}

function setColor (e) {
    const color = getRandomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (e) {
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #000`
}

function getRandomColor (e) {
    const index = Math.floor(Math.random () * colors.length)
    return colors[index]
}

