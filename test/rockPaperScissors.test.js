import { rockPaperScissors } from '../rockPaperScissors.js';

const test = QUnit.test;

test('lets test this thing', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const winner = rockPaperScissors('rock', 'scissors');
    const winner1 = rockPaperScissors('paper', 'rock');
    const winner2 = rockPaperScissors('scissors', 'paper');
    const loser = rockPaperScissors('rock', 'paper');
    const loser1 = rockPaperScissors('paper', 'scissors');
    const loser2 = rockPaperScissors('scissors', 'rock');
    const draw = rockPaperScissors('scissors', 'scissors');




    //Assert
    // Make assertions about what is expected valid result
    assert.equal(winner, 1);
    assert.equal(winner1, 1);
    assert.equal(winner2, 1);
    assert.equal(loser, 3);
    assert.equal(loser1, 3);
    assert.equal(loser2, 3);
    assert.equal(draw, 2);
});
