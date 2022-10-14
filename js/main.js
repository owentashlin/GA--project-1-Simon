console.log('hello')

//elements
const grnButton = document.querySelector('#green-quad')
const redButton = document.querySelector('#red-quad')
const bluButton = document.querySelector('#blue-quad')
const yelButton = document.querySelector('#yellow-quad')

//functions
clickGrnBtn = function() {
    console.log('green button clicked')
}

clickRedBtn = function() {
    console.log('red button clicked')
}

clickBluBtn = function() {
    console.log('blue button clicked')
}

clickYelBtn = function() {
    console.log('yellow button clicked')
}

//event listeners
grnButton.addEventListener('click', clickGrnBtn)
redButton.addEventListener('click', clickRedBtn)
bluButton.addEventListener('click', clickBluBtn)
yelButton.addEventListener('click', clickYelBtn)
