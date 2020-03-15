const startGameBtn = document.getElementById("start-game-btn");

const func = function() {
  console.log("my name is usman");
};

func();
// myFun();

const person = {
  fun: function myFunction() {
    console.log("my name is usman also");
  }
};

// person.fun();

startGameBtn.addEventListener("click", func);
startGameBtn.addEventListener("click", func);
