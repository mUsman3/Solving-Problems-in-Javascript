const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

const movies = [];

// const renderMovies = (filter = "") => {
//   const movieList = document.getElementById("movie-list");

//   if (movieList === 0) {
//     movieList.classList.remove("visible");
//     return;
//   } else {
//     movieList.classList.add("visible");
//   }
//   movieList.innerHTML = "";
//   //Filteration
//   const filteredMovies = !filter
//     ? movies
//     : movies.filter(movie => movie.info.title.includes(filter));

//   //Storng Values in List, below
//   filteredMovies.forEach(movie => {
//     const movieElement = document.createElement("li");
//     let text = movie.info.title + " - ";
//     for (const key in movie.info) {
//       if (key !== "title") {
//         text = text + `${key} :  ${movie.info[key]}`;
//       }
//     }

//     movieElement.textContent = text;
//     movieList.append(movieElement);
//   });
// };
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraValue.trim() === "" ||
    extraName.trim() === ""
  ) {
    return alert("please enter all the values");
  }

  const newMovies = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  };
  movies.push(newMovies);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchButton.addEventListener("click", searchMovieHandler);
