import { rockPaperScissors } from './rockPaperScissors.js';

const playButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const totalPlays = document.getElementById('total-plays');
const totalWins = document.getElementById('wins');
const winPercentage = document.getElementById('percentage');
const result = document.getElementById('result');
const computerMove = document.getElementById('computer-throw');
const rockImage = document.getElementById('rockimage');
const paperImage = document.getElementById('paperimage');
const scissorsImage = document.getElementById('scissorsimage');

//initialize section
let playCounter = 0;
let winCounter = 0;

// computer throw
function computerThrow() {
    let randomThrow = Math.random() * 3;
    let roundedThrow = Math.floor(randomThrow);

    if (roundedThrow === 0) {
        computerMove.textContent = 'ROCK!';
        rockImage.style.display = 'block';
        paperImage.style.display = 'none';
        scissorsImage.style.display = 'none';
        return 'rock';

    }
    else if (roundedThrow === 1) {
        computerMove.textContent = 'PAPER!';
        paperImage.style.display = 'block';
        scissorsImage.style.display = 'none';
        rockImage.style.display = 'none';
        return 'paper';
    }
    else if (roundedThrow === 2) {
        computerMove.textContent = 'SCISSORS!';
        scissorsImage.style.display = 'block';
        paperImage.style.display = 'none';
        rockImage.style.display = 'none';
        return 'scissors';
    }
}

// percentage
function getPercentage() {
    let percentageDecimal = winCounter / playCounter;
    let unroundedPercentage = percentageDecimal * 100;
    let finalNumber = Math.round(unroundedPercentage);
    return finalNumber;
}

playButton.addEventListener('click', () => {
    // radio button selector
    const selection = document.querySelector('input[type=radio]:checked');

    let userSelection = selection.value;
    let botSelection = computerThrow();
    
    playCounter++;
    totalPlays.textContent = playCounter;
    
    if (rockPaperScissors(userSelection, botSelection) === 1) {
        winCounter++;
        totalWins.textContent = winCounter;
        result.textContent = 'YOU WIN!';
    }
    else if (rockPaperScissors(userSelection, botSelection) === 2) {
        result.textContent = 'DRAW';
    }
    else if (rockPaperScissors(userSelection, botSelection) === 3) {
        result.textContent = 'YOU LOSE!';
    }

    winPercentage.textContent = getPercentage();
});

// reset button

resetButton.addEventListener('click', () => {
    playCounter = 0;
    winCounter = 0;
    winPercentage.textContent = 0;
    
    totalPlays.textContent = playCounter;
    totalWins.textContent = winCounter;
    
    result.textContent = '';
    computerMove.textContent = '';
    paperImage.style.display = 'none';
    rockImage.style.display = 'none';
    scissorsImage.style.display = 'none';
});