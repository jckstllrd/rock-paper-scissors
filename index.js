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

let humanScore = 0;
let computerScore = 0;

function displayScore(humanScore, computerScore) {
  resultsDiv = document.querySelector(".results");
  console.log(resultsDiv);
  resultsDiv.textContent =
    "Human: " + humanScore + "\nComputer: " + computerScore;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  console.log(humanChoice + " vs. " + computerChoice);

  if (humanChoice === computerChoice) {
    displayScore(humanScore, computerScore);
  }

  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    displayScore(humanScore, computerScore);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    displayScore(humanScore, computerScore);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    displayScore(humanScore, computerScore);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    displayScore(humanScore, computerScore);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerChoice++;
    displayScore(humanScore, computerScore);
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    displayScore(humanScore, computerScore);
  }
  if (humanScore == 5 || computerScore == 5) {
    resultsDiv = document.querySelector(".results");
    winner = document.createElement("h1");
    winner.textContent = "We have a winner at 5 points!";
    resultsDiv.appendChild(winner);
    console.log("winner");
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    playRound(e.target.className, getComputerChoice());
  });
});
