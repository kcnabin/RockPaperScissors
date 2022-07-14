let welcomeMessage = "Hello user, You will play 'Rock, Paper, Scissor' against computer.";
let rules = "What are the rules?"
let rules1 = "If you choose Rock, you will win against Scissors but lose against Paper.";
let rules2 = "If you choose Scissors, you will win against Paper but lose against Rock.";
let rules3 = "If you choose Paper, you will win against Rock but lose against Scissors."

let startMessage = [welcomeMessage, rules, rules1, rules2, rules3];
for (let msg of startMessage) {
	console.log(msg);
}

// computer selection at random
function computerSelection() {
	// function to return rock, paper or scissor in random

	let myArray = ['rock', 'paper', 'scissor'];

	// get random value from array
	let randValue = myArray[Math.floor(Math.random() * myArray.length)];

	return randValue;
}

function sayHi(e) {
	this.classList.add("hovering");
}

function sayBye(e) {
	// console.log("Going so soon?");
	e.target.classList.remove("hovering");
}

// player section
function userSelection() {

	let uC1 = document.querySelector("#rock");
	uC1.addEventListener("click", function() {
		bothSelection("rock");
	});

	let uC2 = document.querySelector("#paper");
	uC2.addEventListener("click", function() {
		bothSelection("paper");
	});

	let uC3 = document.querySelector("#scissor");
	uC3.addEventListener("click", function() {
		bothSelection("scissor");
	});

	// event listener for mouse enter event
	uC1.addEventListener("mouseover", sayHi);
	uC2.addEventListener("mouseover", sayHi);
	uC3.addEventListener("mouseover", sayHi);

	// event listen for mouse out event
	uC1.addEventListener("mouseout", sayBye);
	uC2.addEventListener("mouseout", sayBye);
	uC3.addEventListener("mouseout", sayBye);

}

function bothSelection(user) {
	let computer = computerSelection();
	showUserChoice(user);
	showCompChoice(computer);
	checkLogic(user, computer);
}

function showUserChoice(user) {
	let choice = document.querySelector(".your-choice");
	choice.textContent = "Your Choice = " + user.toUpperCase();
}

function showCompChoice(computer) {
	let selection = document.querySelector(".comp-choice");
	selection.textContent = "Computer Choice = " + computer.toUpperCase();
}

// checks the main logic of the game
function checkLogic(playerChoice, computerChoice) {

	if (playerChoice == computerChoice) {
		console.log("Both have choosen same!");
		console.log("----------------------------");
		let result = document.querySelector("#result");
		result.textContent = "BOTH HAVE CHOOSEN THE SAME!";
		result.style.color = "black"

		setTimeout(function() {
			result.textContent = "RESULT";
		}, 2000);
	}

	
	else if (playerChoice == 'rock') {
		if (computerChoice == 'paper') {
			youLose(computerChoice, playerChoice);
		} else if (computerChoice == 'scissor') {
			youWin(playerChoice, computerChoice);
		}
	} 

	else if (playerChoice == 'paper') {
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
	// compScore++;

	let result = document.querySelector("#result");
		result.textContent = "Sorry, You Lose :(";
		result.style.color = "#f23854"

		setTimeout(function() {
			result.textContent = "RESULT";
		}, 5000);

	// console.log("Your score: " + userScore);
	// console.log("Computer score: " + compScore);

	console.log("You lose!");
	console.log(winner.toUpperCase() + " always beats " + loser.toUpperCase());
	console.log("----------------------------");
	// checkStatus();
}

// displays if user has won the game
function youWin(winner, loser) {
	// userScore++;
	let result = document.querySelector("#result");
	result.textContent = "Congrats, You win :)";
	result.style.color = '#2a47c7';
	setTimeout(function() {
		result.textContent = "RESULT";
	}, 5000);

	// console.log("Your score: " + userScore);
	// console.log("Computer score: " + compScore);
	console.log("Congrats, You win!");
	console.log(winner.toUpperCase() + " always beats " + loser.toUpperCase());

	console.log("----------------------------");
	// checkStatus();
}

// total games system is currently disabled
// function checkStatus() {
// 	if (userScore >= totalGames) {
// 		alert("Congrats, You win!");
// 	}

// 	if (compScore >= totalGames) {
// 		alert("Sorry, You lose!");
// 	}
// }


// start the game
userSelection();