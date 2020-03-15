const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT = "PAPER";
let gameRunning = false;

const playerChoice = function() {
  const selectOption = prompt(
    `${ROCK}, ${PAPER} or ${SCISSOR}`,
    ""
  ).toUpperCase();
  if (
    selectOption !== ROCK &&
    selectOption !== PAPER &&
    selectOption !== SCISSOR
  ) {
    alert(`we have choose ${DEFAULT}, as you made invalid input`);
    return DEFAULT;
  }
  return selectOption;
};

const computerChoice = function() {
  const randomValue = Math.random();
  if (randomValue < 0.33) {
    return PAPER;
  } else if (randomValue < 0.66) {
    return SCISSOR;
  } else {
    return PAPER;
  }
};

const winner = function(compChoice, plyrChoice) {
  if (compChoice === plyrChoice) {
    return "Match is Draw";
  } else if (
    (compChoice == ROCK && plyrChoice == PAPER) ||
    (compChoice == PAPER && plyrChoice == SCISSOR)
  ) {
    return "Player win";
  } else {
    return "Computer Win";
  }
};

startGameBtn.addEventListener("click", function() {
  if (gameRunning) {
    return;
  }
  gameRunning;
  console.log("Game Starting");
  // const selctedValue = Game();
  // console.log(selctedValue);
  const playChoice = playerChoice();
  const ComputerChoice = computerChoice();
  const Winner = winner(ComputerChoice, playChoice);
  console.log(Winner);
});
