export function rockPaperScissors(player, computer) {
    // 1 = win, 2 = draw, 3 = lose
    if (player === 'rock' && computer === 'rock') {
        return 2;
    }
    else if (player === 'rock' && computer === 'paper') {
        return 3;
    }
    else if (player === 'rock' && computer === 'scissors') {
        return 1;
    }
    else if (player === 'scissors' && computer === 'rock') {
        return 3;
    }
    else if (player === 'scissors' && computer === 'paper') {
        return 1;
    }
    else if (player === 'scissors' && computer === 'scissors') {
        return 2;
    }
    else if (player === 'paper' && computer === 'rock') {
        return 1;
    }
    else if (player === 'paper' && computer === 'scissors') {
        return 3;
    }
    else if (player === 'paper' && computer === 'paper') {
        return 2;
    }
}