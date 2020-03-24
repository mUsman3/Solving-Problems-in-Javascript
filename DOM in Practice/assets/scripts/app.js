const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop");
const cancelButtonModal = addMovieModal.querySelector(".btn--passive");


//functions
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleButton = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelButtonHandler = () => {
  toggleButton();
};


startAddMovieButton.addEventListener("click", toggleButton);
backdrop.addEventListener("click", toggleButton);
cancelButtonModal.addEventListener("click", cancelButtonHandler);
