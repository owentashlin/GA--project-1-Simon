console.log("my god, it's full of stars")

const grnButton = document.querySelector('.green-btn')
const redButton = document.querySelector('.red-btn')
const bluButton = document.querySelector('.blue-btn')
const yelButton = document.querySelector('.yellow-btn')
const startButton = document.querySelector('#start-button')
const resetButton = document.querySelector('#reset-button')
const colors = ['green', 'red', 'blue', 'yellow']
let gameText 
let gameSequence = []
let playerSequence = []
let level = 0 

function updateLevel() {
    document.getElementById('level-display').innerHTML = level
}

function updateGameText() {
    document.getElementById('game-text').innerHTML = gameText
}

clickStartBtn = function() {
    startButton.style.color = 'red'
    gameTurn()
    updateLevel()
}

clickResetBtn = function() {
    gameSequence = []
    playerSequence = []
    level = 0
    updateLevel()
    gameText = 'click start to try again'
    updateGameText()
    startButton.style.color = 'rgb(0, 133, 133)'
    document.getElementById('level-display').innerHTML = ''
    console.log(gameSequence, playerSequence, 'level ' + level, 'reset button clicked')
}

gameTurn = function() {  
    gameText = 'Wait and watch'
        updateGameText()
    level +=1
        updateLevel()
    if (level == 2) {
        return playerWinsAnimation()
    } else {
        pushRandomColor(randomClr())
    }     
    for (let i = 1; i <= gameSequence.length; i++)    
        setTimeout(() => {
            showGameSequence(gameSequence[i - 1])
        }, (500 * i))
        setTimeout(() => {
            playerTurn()
        }, turnTimer())
}    

playerTurn = function () {
    playerSequence = []
    gameText = 'Your Turn'
    updateGameText()
        setTimeout(() => {
            compareArrays()
        }, turnTimer())
    console.log(playerSequence)    
}

compareArrays = function() {
let arrayMatch    
    for (i = 0; i < playerSequence.length; i++) {
        if (gameSequence[i] !== playerSequence[i]) {
            arrayMatch != true 
            {break}
        } else if (gameSequence[i] === playerSequence[i]) {
            arrayMatch = true 
            {continue}
        }
    }    
        if (arrayMatch !== true) {
            clickResetBtn()
        } else if (arrayMatch === true) {
            gameTurn()
        }           
    console.log(playerSequence, level)
}    

let randomClr = function() {
    return colors[Math.floor(Math.random() * colors.length)]
}

let pushRandomColor = function(color) {
    if (color === 'green') {
        gameSequence.push('green')
    } else if (color === 'red') {
        gameSequence.push('red')
    } else if (color === 'blue') {
        gameSequence.push('blue')
    } else if (color === 'yellow') {
        gameSequence.push('yellow')
        }
}

showGameSequence = function(color) {
    if (color === 'green') {
        setTimeout(lightGrnBtn(), 1000)
    } else if (color === 'red') {
        setTimeout(lightRedBtn(), 1000)
    } else if (color === 'blue') {
        setTimeout(lightBluBtn(), 1000)
    } else if (color === 'yellow') {
        setTimeout(lightYelBtn(), 1000)
        }
}

turnTimer = function() {
    if (level < 2){
        return 3000
    } else if (level <= 3){
        return 4000
    } else if (level <= 5){
        return 6000
    } else if (level <= 7){
        return 8000
    } else if (level <= 10){
        return 12000
    }
}

playerWinsAnimation = function() {
        setTimeout(() => {
            lightGrnBtn()
        }, 100)
        setTimeout(() => {
            lightRedBtn()
        }, 200)
        setTimeout(() => {
            lightBluBtn()
        }, 300)
        setTimeout(() => {
            lightYelBtn()
        }, 400)
        setTimeout(() => {
            lightGrnBtn()
        }, 500)
        setTimeout(() => {
            lightRedBtn()
        }, 600)
        setTimeout(() => {
            lightBluBtn()
        }, 700)
        setTimeout(() => {
            lightYelBtn()
        }, 800)
        setTimeout(() => {
            lightGrnBtn()
        }, 900)
        setTimeout(() => {
            lightRedBtn()
        }, 1000)
        setTimeout(() => {
            lightBluBtn()
        }, 1100)
        setTimeout(() => {
            lightYelBtn()
        }, 1200)
        setTimeout(() => {
            lightGrnBtn()
        }, 1300)
        setTimeout(() => {
            lightRedBtn()
        }, 1400)
        setTimeout(() => {
            lightBluBtn()
        }, 1500)
        setTimeout(lightYelBtn(), 1600)
    gameText = "you win!"
    updateGameText()
    setTimeout(() => {
        clickResetBtn()
    }, 2500)
}

clickGrnBtn = function() {
    grnButton.style.backgroundColor = '#03cb03';
    setTimeout(() => {
        grnButton.style.backgroundColor = 'rgb(0, 61, 0)'
      }, 250);
      playerSequence.push('green')
      console.log(playerSequence, 'clicked green')
}

clickRedBtn = function() {
    redButton.style.backgroundColor = '#ff0000'
    setTimeout(() => {
        redButton.style.backgroundColor = 'rgb(64, 1, 1)'
      }, 250);
      playerSequence.push('red')
      console.log(playerSequence, 'clicked red')
}

clickBluBtn = function() {
    bluButton.style.backgroundColor = 'rgb(0, 38, 255)'
    setTimeout(() => {
        bluButton.style.backgroundColor = 'rgb(2, 2, 83)'
    }, 250);
    playerSequence.push('blue')
        console.log(playerSequence, 'clicked blue')
}

clickYelBtn = function() {
    yelButton.style.backgroundColor = '#ffff00'
    setTimeout(() => {
        yelButton.style.backgroundColor = 'rgb(43, 43, 1)'
      }, 250);
      playerSequence.push('yellow')
        console.log(playerSequence, 'clicked yellow')
}

lightGrnBtn = function() {
    grnButton.style.backgroundColor = '#03cb03'
    setTimeout(() => {
        grnButton.style.backgroundColor = 'rgb(0, 61, 0)'
      }, 250);
}

lightRedBtn = function() {
    redButton.style.backgroundColor = '#ff0000'
    setTimeout(() => {
        redButton.style.backgroundColor = 'rgb(64, 1, 1)'
        }, 250)
}

lightBluBtn = function() {
    bluButton.style.backgroundColor = '#0000ff'
    setTimeout(() => {
        bluButton.style.backgroundColor = 'rgb(2, 2, 83)'
    }, 250)
}

lightYelBtn = function() {
    yelButton.style.backgroundColor = '#ffff00'
    setTimeout(() => {
        yelButton.style.backgroundColor = 'rgb(43, 43, 1)'
      }, 250);
}

grnButton.addEventListener('click', clickGrnBtn)
redButton.addEventListener('click', clickRedBtn)
bluButton.addEventListener('click', clickBluBtn)
yelButton.addEventListener('click', clickYelBtn)
startButton.addEventListener('click', clickStartBtn)
resetButton.addEventListener('click', clickResetBtn)