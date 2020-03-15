const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT = "PAPER";

const Game = function() {
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

startGameBtn.addEventListener("click", function() {
  console.log("Game Starting");
  const selctedValue = Game();
  console.log(selctedValue);
});
