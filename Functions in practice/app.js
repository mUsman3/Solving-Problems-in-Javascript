const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT = "PAPER";
let gameRunning = false;
const DRAW = "Match is Draw";
const PLYWIN = "PLAYER WIN";
const COMPWIN = "COMPUTER WON";

const playerChoice = () => {
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

const computerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.33) {
    return PAPER;
  } else if (randomValue < 0.66) {
    return SCISSOR;
  } else {
    return PAPER;
  }
};

const winner = (compChoice, plyrChoice) => {
  if (compChoice === plyrChoice) {
    return "Match is Draw";
  } else if (
    (compChoice == ROCK && plyrChoice == PAPER) ||
    (compChoice == PAPER && plyrChoice == SCISSOR)
  ) {
    return "Player win";
  } else {
    return "Computer win";
  }
};

startGameBtn.addEventListener("click", () => {
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
  let message = `You Picked ${playChoice} and player Picked ${ComputerChoice}, So `;
  if (Winner === DRAW) {
    message = message + "Draw";
  } else if (Winner === PLYWIN) {
    message = message + "You won";
  } else if (Winner === COMPWIN) {
    message = message + "Computer Won";
  }
  alert(message);
  gameRunning = false;
});

/*

   practice

let sumUp = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumUp(1, 23, 34, 5, 67654, 33));


*/
