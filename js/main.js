console.log("sigh... Let's try this again.")

//**elements**//

//buttons
const grnButton = document.querySelector('#green-btn')
const redButton = document.querySelector('#red-btn')
const bluButton = document.querySelector('#blu-btn')
const yelButton = document.querySelector('#yellow-btn')
const startButton = document.querySelector('#start-button')
const resetButton = document.querySelector('#reset-button')

//**functions**//

//color button functions - until we figure out how to do it better, with a toggle

clickGrnBtn = function() {
    grnButton.style.backgroundColor = '#03cb03';
    setTimeout(() => {
        grnButton.style.backgroundColor = 'rgb(0, 61, 0)'
      }, 500);
      playerSequence.push('green')
    console.log(playerSequence, 'green button clicked')
}

clickRedBtn = function() {
    redButton.style.backgroundColor = '#ff0000'
    setTimeout(() => {
        redButton.style.backgroundColor = 'rgb(64, 1, 1)'
      }, 500);
      playerSequence.push('red')
    console.log(playerSequence, 'red button clicked')
}

clickBluBtn = function() {
    bluButton.style.backgroundColor = '#0000ff'
    setTimeout(() => {
        bluButton.style.backgroundColor = 'rgb(2, 2, 83)'
    }, 500);
        playerSequence.push('blue')
    console.log(playerSequence, 'blue button clicked')
}

clickYelBtn = function() {
    yelButton.style.backgroundColor = '#ffff00'
    setTimeout(() => {
        yelButton.style.backgroundColor = 'rgb(43, 43, 1)'
      }, 500);
      playerSequence.push('yellow')
    console.log(playerSequence, 'yellow button clicked')
}

//gameplay functions- currently a HOT mess...
const colors = ['green', 'red', 'blue', 'yellow']
let gameSequence = []
let playerSequence = []
let level = 0

clickStartBtn = function() {
    goToNextLevel = true
    if (goToNextLevel = true) {
        nextLevel()
    startButton.style.color = 'red'
    console.log('start button clicked')
}

nextLevel = function() {
//get random color for gameplay
    let randomClr = colors[Math.floor(Math.random() * colors.length)]
    for (i = 0; i < gameSequence.length; i++) {
        if () {
            
        }
    }
// random color lights up buttons on gameboard
    if (gameSequence[i] = 'green') {
        grnButton.style.backgroundColor = '#03cb03';
    setTimeout(() => {
        grnButton.style.backgroundColor = 'rgb(0, 61, 0)'
      }, 500);
      gameSequence.push('green')
    } else if (randomClr = 'red') {
        redButton.style.backgroundColor = '#ff0000'
    setTimeout(() => {
        redButton.style.backgroundColor = 'rgb(64, 1, 1)'
      }, 500);
      gameSequence.push('red')
    } else if (randomClr = 'blue') {
        bluButton.style.backgroundColor = '#0000ff'
    setTimeout(() => {
        bluButton.style.backgroundColor = 'rgb(2, 2, 83)'
    }, 500);
        gameSequence.push('blue')
    } else if (randomClr = 'yellow') {
        yelButton.style.backgroundColor = '#ffff00'
    setTimeout(() => {
        yelButton.style.backgroundColor = 'rgb(43, 43, 1)'
      }, 500);
      gameSequence.push('yellow')
    }
// when level goes up, number of randomBtn's returned goes up to match level#
// push color into game array
    gameSequence.push(randomClr)
// level # is displayed in the level field on screen
// //   let levelText = document.getElementById('#level-counter')
// //   levelText.innerText('level counter:' + level)
    console.log(gameSequence, level)
}

playerTurn = function() {
    //  player clicks buttons
    //  button lights up (and plays sound?)
    //  button color pushed into playerSequence
    //  playerSequence is compared to gameSequence
    for (i = 0; i < playerSequence.length; i++) {
        if (gameSequence[i] !== playerSequence[i]) {
            goToNextLevel = false
        }
    }
    //  if no exact match loser message is displayed   
    if (!goToNextLevel)
    level += 1 
    //  if match exact match
    //     nextLevel is called
    nextLevel()
    console.log(playerSequence)
}

clickResetBtn = function() {
    gameSequence = []
    playerSequence = []
    level = 0
    startButton.style.color = 'rgb(0, 133, 133)'
    console.log(gameSequence, playerSequence, level, 'reset button clicked')
}

//**event listeners**//

grnButton.addEventListener('click', clickGrnBtn)
redButton.addEventListener('click', clickRedBtn)
bluButton.addEventListener('click', clickBluBtn)
yelButton.addEventListener('click', clickYelBtn)
startButton.addEventListener('click', clickStartBtn)
resetButton.addEventListener('click', clickResetBtn)