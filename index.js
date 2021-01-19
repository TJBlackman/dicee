// Save reference to html elements we need
// we can just do once at the start, and not every time the button is clicked
const diceOneImg = document.getElementById('dice1');
const diceTwoImg = document.getElementById('dice2');
const rollBtn = document.getElementById('roll-dice-button');
const h1 = document.querySelector('h1');

// call this function to return a random number 1-6
function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// takes in a number, returns image src with that number
// this works because we know all the images follow the same naming scheme
function generateImageSrc(number) {
  return `/images/dice${number}.png`;
}

// what happens when we roll a dice?
function rollDice() {
  // generate new numbers for both dice
  var diceOneNumber = generateRandomNumber();
  var diceTwoNumber = generateRandomNumber();
  // get new image src's, and update them
  var newImgSrcOne = generateImageSrc(diceOneNumber);
  var newImgSrcTwo = generateImageSrc(diceTwoNumber);
  diceOneImg.src = newImgSrcOne;
  diceTwoImg.src = newImgSrcTwo;
  // determine winner
  var winner = 'Player 1';
  if (diceTwoNumber > diceOneNumber) {
    winner = 'Player 2';
  }
  // display winner
  h1.innerText = `${winner} is the winner!`;
}

// listen for the button to be clicked, then roll dice
rollBtn.addEventListener('click', rollDice);
