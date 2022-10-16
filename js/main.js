console.log('wtf are we doing here?')

//**elements**//

//buttons
const grnButton = document.querySelector('#green-btn')
const redButton = document.querySelector('#red-btn')
const bluButton = document.querySelector('#blue-btn')
const yelButton = document.querySelector('#yellow-btn')
const startButton = document.querySelector('#start-button')
const resetButton = document.querySelector('#reset-button')

//gameplay elements
let gameSequence = []
let playerSequence = []
let level = 0

//**functions**//

//gameplay functions
nextLevel = function() {
    let colors = ['green', 'red', 'blue', 'yellow']
    //get random color for gameplay
    let randomClr = colors[Math.floor(Math.random() * colors.length)]
    //push color into game array
    gameSequence.push(randomClr)
    //when level goes up, number of randomBtn's returned goes up to match level#
    level += 1
    console.log(gameSequence, level)
}

clickStartBtn = function () {
    nextLevel()
    startButton.style.color = 'red'
    console.log('start button clicked')
}

playerTurn = function() {
    //player clicks buttons, 
    //loads into playerSequence[]
    playerSequence.push(playerTurn)
    //forEach playerSequence[]
    //if match gameSequence[]
    //nextLevel is called
}

clickResetBtn = function() {
    gameSequence = []
    playerSequence = []
    level = 0
    startButton.style.color = 'rgb(0, 133, 133)'
    console.log(gameSequence, playerSequence, level, 'reset button clicked')
}

//color button functions - until we figure out how to do it better, with fucking toggle

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

//**event listeners**//

//click listeners
grnButton.addEventListener('click', clickGrnBtn)
redButton.addEventListener('click', clickRedBtn)
bluButton.addEventListener('click', clickBluBtn)
yelButton.addEventListener('click', clickYelBtn)
startButton.addEventListener('click', clickStartBtn)
resetButton.addEventListener('click', clickResetBtn)