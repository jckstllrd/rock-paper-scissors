function getComputerChoice() {
  let randNum = Math.floor(Math.random() * (4 - 1)) + 1;
  let compChoice;
  if (randNum == 1) {
    compChoice = "rock";
  } else if (randNum == 2) {
    compChoice = "paper";
  } else if (randNum == 3) {
    compChoice = "scissors";
  }
  console.log(randNum);

  return compChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Give me answers");

  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log("Human: " + humanScore + "Computer: " + computerScore);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    console.log("Human: " + humanScore + "Computer: " + computerScore);
  } else if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("Draw");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log("Human: " + humanScore + "Computer: " + computerScore);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log("Human: " + humanScore + "Computer: " + computerScore);
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("Draw");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerChoice++;
    console.log("Human: " + humanScore + "Computer: " + computerScore);
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    humanScore++;
    console.log("Draw");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log("Human: " + humanScore + "Computer: " + computerScore);
  }
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
