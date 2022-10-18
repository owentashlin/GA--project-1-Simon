console.log("cautiously optimistic... likely a trap.")

//**elements**//

//buttons
const grnButton = document.querySelector('.green-btn')
const redButton = document.querySelector('.red-btn')
const bluButton = document.querySelector('.blue-btn')
const yelButton = document.querySelector('.yellow-btn')
const startButton = document.querySelector('#start-button')
const resetButton = document.querySelector('#reset-button')
const colors = ['green', 'red', 'blue', 'yellow']
let gameSequence = []
let playerSequence = []
let level = 1

//**functions**//

//color button functions - until we figure out how to do it better, with a toggle
clickGrnBtn = function() {
    grnButton.style.backgroundColor = '#03cb03';
    setTimeout(() => {
        grnButton.style.backgroundColor = 'rgb(0, 61, 0)'
      }, 500);
      //playerSequence.push('green')
    console.log('green clicked')
}

clickRedBtn = function() {
    redButton.style.backgroundColor = '#ff0000'
    setTimeout(() => {
        redButton.style.backgroundColor = 'rgb(64, 1, 1)'
      }, 500);
      //playerSequence.push('red')
    console.log('red clicked')
}

clickBluBtn = function() {
    bluButton.style.backgroundColor = 'rgb(0, 38, 255)'
    setTimeout(() => {
        bluButton.style.backgroundColor = 'rgb(2, 2, 83)'
    }, 500);
        //playerSequence.push('blue')
    console.log('blue clicked')
}

clickYelBtn = function() {
    yelButton.style.backgroundColor = '#ffff00'
    setTimeout(() => {
        yelButton.style.backgroundColor = 'rgb(43, 43, 1)'
      }, 500);
        //playerSequence.push('yellow')
    console.log('yellow clicked')
}

function updateLevel() {
    document.getElementById('level-display').innerHTML = level
  }

clickStartBtn = function() {
    startButton.style.color = 'red'
    gameTurn()
    console.log('start button clicked')
    updateLevel()
}

clickResetBtn = function() {
    gameSequence = []
    playerSequence = []
    level = 1
    updateLevel()
    startButton.style.color = 'rgb(0, 133, 133)'
    console.log(gameSequence, playerSequence, 'level ' + level, 'reset button clicked')
}

//**game play functions**\\

gameTurn = function() {
// get random color for gameplay
let randomClr = colors[Math.floor(Math.random() * colors.length)]
// random color lights up buttons and 
    if (randomClr === 'green') {
        lightGrnBtn() 
    } else if (randomClr === 'red') {
        lightRedBtn()
    } else if (randomClr === 'blue') {
        lightBluBtn()
    } else if (randomClr === 'yellow') {
        lightYelBtn()
        }
//pushes into gameSequence 
    gameSequence.push(randomClr)
    console.log(gameSequence, level)
//game iterates through array, repeats finding colors until number of items in array equals level#    
// for (i = 0; i < gameSequence.length; i++) {
//     if (gameSequence.length < level) {
// //... something goes here
// } 
// // when level goes up, number of randomBtn's returned goes up to match level#
// // console to check any of this crap is working...    
//     }
}

playerTurn = function() {
    // player clicks buttons, button lights up (and plays sound?)
        //clickGrnBtn()
        //clickRedBtn()
        //clickBluBtn()
        //clickYelBtn()
    // button color pushed into playerSequence
        
    // playerSequence is compared to gameSequence
        for (i = 0; i < playerSequence.length; i++) {
            if (gameSequence[i] !== playerSequence[i]) {
                goToNextLevel = false
                console.log('try again')
            } else {
            goToNextLevel = true
            console.log('move to the next level')
            }
        }
    // if no exact match loser message is displayed
        if (goToNextLevel = true)
            level += 1 
    // if match exact match, nextLevel is called
        updateLevel()
        gameTurn()
        console.log(playerSequence, level)
    }

//button and light functions

lightGrnBtn = function() {
    grnButton.style.backgroundColor = '#03cb03'
    setTimeout(() => {
        grnButton.style.backgroundColor = 'rgb(0, 61, 0)'
      }, 500);
    }

lightRedBtn = function() {
    redButton.style.backgroundColor = '#ff0000'
    setTimeout(() => {
        redButton.style.backgroundColor = 'rgb(64, 1, 1)'
        }, 500)
    }

lightBluBtn = function() {
    bluButton.style.backgroundColor = '#0000ff'
    setTimeout(() => {
        bluButton.style.backgroundColor = 'rgb(2, 2, 83)'
    }, 500)
}

lightYelBtn = function() {
    yelButton.style.backgroundColor = '#ffff00'
    setTimeout(() => {
        yelButton.style.backgroundColor = 'rgb(43, 43, 1)'
      }, 500);
    }

//**event listeners**//

grnButton.addEventListener('click', clickGrnBtn)
redButton.addEventListener('click', clickRedBtn)
bluButton.addEventListener('click', clickBluBtn)
yelButton.addEventListener('click', clickYelBtn)
startButton.addEventListener('click', clickStartBtn)
resetButton.addEventListener('click', clickResetBtn)