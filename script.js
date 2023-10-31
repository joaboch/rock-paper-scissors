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

//This function will play a 5 round game using the playRound function and returns a winner
let playerScore = 0
  , computerScore = 0;

function game(value) {
  const winner = document.querySelector('#winner');
  if(value.slice(0, 8) == "You Win!") {
      playerScore++;
  } else if(value.slice(0, 9) == "You Lose!") {
    computerScore++;
  }
  if(playerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    winner.textContent = "Congratulations, You Win the Game!";
  } else if (computerScore == 5){
    playerScore = 0;
    computerScore = 0;
    winner.textContent = "The Computer Wins the Game!";
  }
  scoreTrack.textContent = playerScore;
  computerTrack.textContent = computerScore;
}


const result = document.querySelector('#results');
const scoreTrack = document.querySelector('#score1');
const computerTrack = document.querySelector('#score2');

const rock = document.querySelector('#rock').addEventListener('click', () => {
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  const value = playRound(playerSelection, computerSelection);
  result.textContent = value;
  winner.textContent = "";
  game(value);
  
})

const paper = document.querySelector('#paper').addEventListener('click', () => {
  playerSelection = "paper";
  const computerSelection = getComputerChoice();
  const value = playRound(playerSelection, computerSelection);
  result.textContent = value;
  winner.textContent = "";
  game(value);
})

const scissors = document.querySelector('#scissors').addEventListener('click', () => {
  playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  const value = playRound(playerSelection, computerSelection);
  result.textContent = value;
  winner.textContent = "";
  game(value);
})