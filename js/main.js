console.log('hello')

//elements
const grnButton = document.querySelector('#green-quad')
const redButton = document.querySelector('#red-quad')
const bluButton = document.querySelector('#blue-quad')
const yelButton = document.querySelector('#yellow-quad')

//functions

//hover functions
hoverRedBtn = function() {
    console.log('green button hover')
}
hoverGrnBtn = function() {
    console.log('red button hover')
}
hoverBluBtn = function() {
    console.log('blue button hover')
}
hoverYelBtn = function() {
    console.log('yellow button hover')
}

//click functions
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

//hover listeners
grnButton.addEventListener('mouseover', hoverGrnBtn)
redButton.addEventListener('mouseover', hoverRedBtn)
bluButton.addEventListener('mouseover', hoverBluBtn)
yelButton.addEventListener('mouseover', hoverYelBtn)

//click listeners
grnButton.addEventListener('click', clickGrnBtn)
redButton.addEventListener('click', clickRedBtn)
bluButton.addEventListener('click', clickBluBtn)
yelButton.addEventListener('click', clickYelBtn)

