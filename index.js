// Write your code here
const main = document.querySelector('main#main')
document.body.removeChild(main)

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Welsey is the champion'

document.body.appendChild(newHeader)