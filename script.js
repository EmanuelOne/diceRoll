// document
var images = document.getElementsByTagName('img');
// DOM means Document Object Model
// images[0].getAttributeNames();
// console.log(rollDice());
var h1 = document.getElementsByTagName('h1')[0];
// h1.textContent = "I'm a new content";
// console.log(h1);
var btn = document.getElementById('btn');
var numberOfTrial = []; // array to store the number of trials to number of game
var numberOfGame = 20;
function diceRoll() {
  // TODO
  // Check if the number of trials is less than 20
  // >=
  //   numberOfTrial.push();
  if (numberOfTrial.length < numberOfGame) {
    var dice1 = rollDice();
    var dice2 = rollDice();
    images[0].setAttribute('src', 'images/dice' + dice1 + '.png');
    images[1].setAttribute('src', 'images/dice' + dice2 + '.png');
    btn.textContent = 'Play Again';
    btn.style.backgroundColor = 'rgb(156 36 31)';
    btn.style.color = 'white';
    //   judgement(dice1, dice2);

    if (dice1 > dice2) {
      numberOfTrial.push(1);
      h1.textContent = 'Player 1 Wins!🥇';
    } else if (dice1 === dice2) {
      numberOfTrial.push(0);
      h1.textContent = 'Draw!🤝';
    } else {
      numberOfTrial.push(2);
      h1.textContent = 'Player 2 Wins!🥈';
    }
    console.log(numberOfTrial);
  } else {
    h1.textContent = 'Game Over!🤝';
    images[0].style.display = 'none';
    images[1].style.display = 'none';
    var div = document.getElementsByClassName('game-over')[0];
    var numberOfDice2 = numberOfTrial.filter(function (item, index, array) {
      if (item === 2) return item;
    }).length;
    var numberOfDice1 = numberOfTrial.filter(function (item, index, array) {
      if (item === 1) return item;
    }).length;
    var winner;
    if (numberOfDice1 > numberOfDice2) {
      winner = 'Player 1';
    } else if (numberOfDice1 === numberOfDice2) {
      winner = 'Draw';
    } else {
      winner = 'Player 2 ';
    }
    // p.textContent = 'Displaying The Winner';
    div.innerHTML =
      '<h3>Displaying The Winner</h3><p>Player 1 : ' +
      numberOfDice1 +
      '</p> <p>Player 2 : ' +
      numberOfDice2 +
      '</p> <h4>The Winner is : ' +
      winner +
      '</h4>';
    btn.textContent = 'Game Over bye bye';
  }
  //   console.log('Dice is rolled');
}
// generate random number between 1 and 6
btn.addEventListener('click', diceRoll);
function rollDice(max = 6, min = 1) {
  var rand = Math.floor(Math.random() * max) + min;

  return rand;
}
