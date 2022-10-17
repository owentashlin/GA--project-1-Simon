**NEXT STEPS**

*Game Play* 
- need an automatic sequence where the game generates a pattern of colors

make random array[], push it into the current level array, then play that sequence over the buttons

then player repeats that sequence and the arrays are compared

if the same, new level loads with additional step

- pattern needs to load into an array

- pattern lights up buttons

- need a function that loads player clicks into an array

- need a function that compares the player array to the game array, if matching, reset game and click up to next level


*Changes/Fixes*
- change color changes in js to classes and set up toggle on click

- fix window sizing, consider mobile view options? - partially complete - need to work out mobile options

For Monday: work out toggles and see how that performs with player and game functions differently than button press functions

- need to disable the buttons until it is playerTurn
    .unclickable - research how that works(stupid class toggles again... sigh.)

*Stretch*
- add tone on button click and mute button

<audio id="soundbuttonGre" src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></audio>
<audio id="soundbuttonRed" src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></audio>
<audio id="soundbuttonYel" src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></audio>
<audio id="soundbuttonBlu" src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></audio>
<audio id="soundbuttonWrong" src="http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3"></audio>