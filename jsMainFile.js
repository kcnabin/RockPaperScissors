// simple JavaScript program to play rock, paper and scissor game

// pseudoCode
// get input from user
// get computer selection (random value)
// check game logic
// declare winner


let welcomeMessage;
welcomeMessage = "Hello user, You will play 'Rock, Paper, Scissor' against computer.";
console.log(welcomeMessage);


// computer selection
function computerSelection() {
	// function to return rock, paper or scissor in random

	let myArray = ['rock', 'paper', 'scissor'];

	// get random value from array
	let randValue = myArray[Math.floor(Math.random() * myArray.length)];

	console.log("Computer choice: " + randValue);

	return randValue;
}

// player section
function userSelection() {
	let userChoice;
	userChoice = prompt('Choose one, "rock", "paper" or "scissor" ', "rock");
	userChoice = userChoice.toLowerCase();
	console.log("User choice: " + userChoice);
	// string check will be added later
	// string will check if user input is one of the three

	return userChoice;
}

// checks the main logic of the game
function checkLogic(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) {
		console.log("Both have choosen same!")
	} else if (playerChoice == 'rock') {
		if (computerChoice == 'paper') {
			youLose(computerChoice, playerChoice);
		} else if (computerChoice == 'scissor') {
			youWin(playerChoice, computerChoice);
		}
	} else if (playerChoice == 'paper') {
		if (computerChoice == 'scissor') {
			youLose(computerChoice, playerChoice);
		} else if (computerChoice == 'rock') {
			youWin(playerChoice, computerChoice);
		}
	} else if (playerChoice == 'scissor') {
		if (computerChoice == 'rock') {
			youLose(computerChoice, playerChoice);
		} else if (computerChoice == 'paper') {
			youWin(playerChoice, computerChoice);
		}
	}
}

// displays if user has lost the game
function youLose(winner, loser) {
	console.log("You lose!");
	console.log(winner.toUpperCase() + " always beats " + loser.toUpperCase());
}

// displays if user has won the game
function youWin(winner, loser) {
	console.log("Congrats, You win!");
	console.log(winner.toUpperCase() + " always beats " + loser.toUpperCase());
}

function playGame() {
	let playerChoice = userSelection();
	let computerChoice = computerSelection();
	checkLogic(playerChoice, computerChoice);
}

// checking 'checkLogic' function
// checkLogic('rock', 'paper');
// checkLogic('paper', 'rock');
// checkLogic('rock', 'rock');

// play the games many times
let totalGames = 5;
for (let i=0; i<totalGames; i++) {
	playGame();
}