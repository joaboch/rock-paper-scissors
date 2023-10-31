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
/*function game() {
    let score = 0
      , result = "";
  //Use a loop to call the function and determinte the parameters
  for(let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    if(result.slice(0, 8) == "You Win!") {
      score++;
    }
  }
  if(score >= 3) {
    console.log("Congratulations, You Win the Game!");
  } else {
    console.log("Too bad, You Lose")
  }
}*/



const rock = document.querySelector('#rock').addEventListener('click', () => {
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
})

const paper = document.querySelector('#paper').addEventListener('click', () => {
  playerSelection = "paper";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
})

const scissors = document.querySelector('#scissors').addEventListener('click', () => {
  playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
})