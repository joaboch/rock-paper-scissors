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

console.log(getComputerChoice());