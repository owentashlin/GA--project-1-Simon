console.log('hello')

//elements

// buttons
const grnButton = document.querySelector('#green-quad')
const redButton = document.querySelector('#red-quad')
const bluButton = document.querySelector('#blue-quad')
const yelButton = document.querySelector('#yellow-quad')
const startButton = document.querySelector('#start-button')

//gameplay elements
let gameSequence = []
let playerSequence = []

let level = 0
const
//functions

nextLevel = function() {
    level += 1
}


//click functions
clickStartBtn = function () {
    startButton.style.color = 'red'
    console.log('start button clicked')
}

clickGrnBtn = function() {
    grnButton.style.backgroundColor = '#03cb03';
    setTimeout(() => {
        grnButton.style.backgroundColor = 'rgb(0, 61, 0)'
      }, 500);
    console.log('green button clicked')
}
clickRedBtn = function() {
    redButton.style.backgroundColor = '#ff0000'
    setTimeout(() => {
        redButton.style.backgroundColor = 'rgb(64, 1, 1)'
      }, 500);
    console.log('red button clicked')
}
clickBluBtn = function() {
    bluButton.style.backgroundColor = '#0000ff'
    setTimeout(() => {
        bluButton.style.backgroundColor = 'rgb(2, 2, 83)'
      }, 500);
    console.log('blue button clicked')
}
clickYelBtn = function() {
    yelButton.style.backgroundColor = '#ffff00'
    setTimeout(() => {
        yelButton.style.backgroundColor = 'rgb(43, 43, 1)'
      }, 500);
    console.log('yellow button clicked')
}

//event listeners

//click listeners
grnButton.addEventListener('click', clickGrnBtn)
redButton.addEventListener('click', clickRedBtn)
bluButton.addEventListener('click', clickBluBtn)
yelButton.addEventListener('click', clickYelBtn)
startButton.addEventListener('click', clickStartBtn)



