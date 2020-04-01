import { rockPaperScissors } from './rockPaperScissors.js';

const playButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
let totalPlays = document.getElementById('total-plays');
let totalWins = document.getElementById('wins');
const winPercentage = document.getElementById('percentage');
const result = document.getElementById('result');
const computerMove = document.getElementById('computer-throw');

//initialize section
let playCounter = 0;
let winCounter = 0;

// computer throw
function computerThrow() {
    let randomThrow = Math.random() * 3;
    let roundedThrow = Math.floor(randomThrow);

    if (roundedThrow === 0) {
        computerMove.textContent = 'ROCK!';
        return 'rock';
    }
    else if (roundedThrow === 1) {
        computerMove.textContent = 'PAPER!';
        return 'paper';
    }
    else if (roundedThrow === 2) {
        computerMove.textContent = 'SCISSORS!';
        return 'scissors';
    }
}

// percentage
function getPercentage() {
    let decimal = winCounter / playCounter;
    let biggerNumber = decimal * 100;
    let finalNumber = Math.round(biggerNumber);
    return finalNumber;
}

playButton.addEventListener('click', () => {
    // radio button selector
    const selection = document.querySelector('input[type=radio]:checked');

    let userSelection = selection.value;
    let botSelection = computerThrow();

    if (rockPaperScissors(userSelection, botSelection) === 1) {
        console.log('Player wins!');
        playCounter++;
        winCounter++;
        totalPlays.textContent = playCounter;
        totalWins.textContent = winCounter;
        result.textContent = 'YOU WIN!';
        winPercentage.textContent = getPercentage();
        
    }
    else if (rockPaperScissors(userSelection, botSelection) === 2) {
        console.log('Draw!');
        playCounter++;
        totalPlays.textContent = playCounter;
        result.textContent = 'DRAW';
        winPercentage.textContent = getPercentage();
    }
    else if (rockPaperScissors(userSelection, botSelection) === 3) {
        console.log('Player loses!');
        playCounter++;
        totalPlays.textContent = playCounter;
        result.textContent = 'YOU LOSE!';
        winPercentage.textContent = getPercentage();
    }

    

});

// reset button

resetButton.addEventListener('click', () => {
    playCounter = 0;
    winCounter = 0;
    totalPlays.textContent = playCounter;
    totalWins.textContent = winCounter;
    winPercentage.textContent = 0;
});