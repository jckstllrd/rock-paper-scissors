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

console.log(getComputerChoice());
