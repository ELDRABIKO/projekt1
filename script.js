document.getElementById("addMovieForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("movieTitle").value;
  const genre = document.getElementById("movieGenre").value;

  const movieItem = document.createElement("div");
  movieItem.classList.add("movie-item");

  const movieTitle = document.createElement("h3");
  movieTitle.textContent = title;

  const movieGenre = document.createElement("p");
  movieGenre.textContent = `Gatunek: ${genre}`;

  movieItem.appendChild(movieTitle);
  movieItem.appendChild(movieGenre);

  document.getElementById("movieList").appendChild(movieItem);

  // Wyczyść pola po dodaniu
  document.getElementById("movieTitle").value = '';
  document.getElementById("movieGenre").value = '';
});
