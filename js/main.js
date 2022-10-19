console.log("bugs! bugs, everywhere! AAAAAAA!!!!!")

//**elements**//

//buttons
const grnButton = document.querySelector('.green-btn')
const redButton = document.querySelector('.red-btn')
const bluButton = document.querySelector('.blue-btn')
const yelButton = document.querySelector('.yellow-btn')
const startButton = document.querySelector('#start-button')
const resetButton = document.querySelector('#reset-button')
const colors = ['green', 'red', 'blue', 'yellow']

let gameText = document.querySelector('instructions')
let gameSequence = []
let playerSequence = []
let level = 0  

//**functions**//

function updateLevel() {
    document.getElementById('level-display').innerHTML = level
};

clickStartBtn = function() {
    startButton.style.color = 'red'
    gameTurn()
    console.log('game start')
    updateLevel()
};

clickResetBtn = function() {
    gameSequence = []
    playerSequence = []
    level = 0
    updateLevel()
    startButton.style.color = 'rgb(0, 133, 133)'
    document.getElementById('level-display').innerHTML = ''
    console.log(gameSequence, playerSequence, 'level ' + level, 'reset button clicked')
};

//*// game play functions

gameTurn = function() {
//*// game iterates through array, repeats finding colors until number of items in array equals level#    
    level += 1 
    // for (i = 0; i < level; i++) {
    //     if (i < level) {
    //     SelectRandomColor() 
    //     }
    // }
    SelectRandomColor()
    gameSequence.forEach(showGameSequence)
    console.log(gameSequence, 'level ' + level, 'your turn')
        setTimeout(() => {
            playerTurn()
        }, levelTimer())
};

//*// player clicks buttons, loading answers into player array, when done, calls compareArrays function
playerTurn = function () {
    for (i = 0; i < playerSequence.length; i++)
        if(playerSequence.length === level) {
            console.log('did it')
            compareArrays()
        } else if (playerSequence < level) {
            // something here to do stuff
        }
    console.log(playerSequence)    
};

compareArrays = function() {
//*// playerSequence is compared to gameSequence
    for (i = 0; i < playerSequence.length; i++) {
        if (gameSequence[i] !== playerSequence[i]) {
//*// if no match, you lose message displayed   
        console.log('try again')
        } else if (gameSequence[i] === playerSequence[i]) {
//*// if match exact match, nextLevel is called
    updateLevel()
        console.log('move to the next level')
        }
    }
    playerSequence = []    
    gameTurn()
        console.log(playerSequence, level)
};

//*// button and light functions

//*// get random color for gameSequence
let SelectRandomColor = function() {
let randomClr = colors[Math.floor(Math.random() * colors.length)]
    if (randomClr === 'green') {
        gameSequence.push('green')
    } else if (randomClr === 'red') {
        gameSequence.push('red')
    } else if (randomClr === 'blue') {
        gameSequence.push('blue')
    } else if (randomClr === 'yellow') {
        gameSequence.push('yellow')
        }
}

showGameSequence = function() {
    if (randomClr === 'green') {
        lightGrnBtn()
    } else if (randomClr === 'red') {
        lightRedBtn()
    } else if (randomClr === 'blue') {
        lightBluBtn()
    } else if (randomClr === 'yellow') {
        lightYelBtn()
        }
}

levelTimer = function() {
    //need to put in a timer function to graduate up the time per level based on the level number
}

// setTimeout(() => {
//     playerTurn()
// }, 1500)

//*// player click functions

clickGrnBtn = function() {
    grnButton.style.backgroundColor = '#03cb03';
    setTimeout(() => {
        grnButton.style.backgroundColor = 'rgb(0, 61, 0)'
      }, 500);
      playerSequence.push('green')
}

clickRedBtn = function() {
    redButton.style.backgroundColor = '#ff0000'
    setTimeout(() => {
        redButton.style.backgroundColor = 'rgb(64, 1, 1)'
      }, 500);
      playerSequence.push('red')
}

clickBluBtn = function() {
    bluButton.style.backgroundColor = 'rgb(0, 38, 255)'
    setTimeout(() => {
        bluButton.style.backgroundColor = 'rgb(2, 2, 83)'
    }, 500);
        playerSequence.push('blue')
}

clickYelBtn = function() {
    yelButton.style.backgroundColor = '#ffff00'
    setTimeout(() => {
        yelButton.style.backgroundColor = 'rgb(43, 43, 1)'
      }, 500);
        playerSequence.push('yellow')
}

//*// light-up button functions
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

//*// event listeners

grnButton.addEventListener('click', clickGrnBtn)
redButton.addEventListener('click', clickRedBtn)
bluButton.addEventListener('click', clickBluBtn)
yelButton.addEventListener('click', clickYelBtn)
startButton.addEventListener('click', clickStartBtn)
resetButton.addEventListener('click', clickResetBtn)