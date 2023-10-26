//Create the computer choice function (It will return either rock, paper or scissors, randomly)
function getComputerChoice() {
  let choice = Math.random();
  
  if (choice <= 0.3333) {
    return choice = "rock";
  } else if (choice <= 0.6667) {
    return choice = "paper";
  } else {
    return choice = "scissors";
  } 
}

//This function plays a round of the game, it should take two parameters, the computer and the player's and return the winner
function playRound(playerSelection, computerSelection) {
  // compare the parameter to see who wins in the game and make the game case-insensitive
  playerSelection.toLowerCase();
  let result = "";
  if (playerSelection === computerSelection) {
    return result = "It's a tie.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return result = "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return result = "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return result = "You Lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return result = "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return result = "You Win! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return result = "You Lose! Rock beats Scissors";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();









console.log(playRound(playerSelection, computerSelection));