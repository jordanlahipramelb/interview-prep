/**
let game = guessingGame();
game(50); // "50 is too low!"
game(90); // "90 is too high!"
game(70); // "You win! You found 70 in 3 guesses."
game(70); // "The game is over, you already won!"

variables
- new number generator
- number of guesses
- is the game over?
 */

function guessingGame() {
	// generate number between 0-99
	const ANSWER = Math.floor(Math.random() * 100);
	let numOfGuesses = 0;
	let isOver = false;

	return function guess(num) {
		// if game is over. ran furst so guesses don't increment
		if (isOver) return "The game is over, you already won!";
		// increment count each time function is ran
		numOfGuesses++;
		// if num is lower than answer
		if (num < ANSWER) return `${num} is too low!`;
		// if num is higher than answer
		if (num > ANSWER) return `${num} is too high!`;

		// if answer is guess
		if (num === ANSWER) {
			// game is over
			isOver = true;
			// guess versus guesses variable
			const guess = numOfGuesses === 1 ? "guess" : "guesses";
			return `You win! You found ${num} in ${numOfGuesses} ${guess}.`;
		}
	};
}

module.exports = { guessingGame };
