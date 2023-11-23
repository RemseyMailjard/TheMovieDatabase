//alert("Welcome to my website");

function fetchingMovieData() {
  const API_Key = "af014cc627e15ec352fdd5b87c73d12a";
  const API_access_token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjAxNGNjNjI3ZTE1ZWMzNTJmZGQ1Yjg3YzczZDEyYSIsInN1YiI6IjY1MzIwMDU5ZWZlMzdjMDBlNDJkMWM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrObwlG4sx2uDnTtmmMgObB79X3Fcf3UAf5QRfQ2eJY";
  const EndpointURL =
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_access_token}`,
    },
  };

  fetch(EndpointURL, options)
    .then((response) => response.json()) // Responce from the API
    .then((data) => DisplayData(data)) // The result data
    .catch((err) => console.error(err));
}

function DisplayData(data) {
  const movies = data.results;
  // console.log(movies);
  //console.log(movies[3].title);

  // Get a reference to the "myText" div element
  const movieContainer = document.getElementById("movieContainer");

  // // Iterate over the movies array and update the content of the div
  // movies.forEach((movie) => {
  //   // Use a template literal to create the paragraph element with movie title
  //   const paragraph = document.createElement("p");
  //   paragraph.textContent = `Movie Title: ${movie.title}`;

  //   // Append the paragraph element to the "myText" div
  //   myTextDiv.appendChild(paragraph);
  // });
  // Iterate over the movies array and create Bootstrap cards
  movies.forEach((movie) => {
    console.log(movie);
    const card = document.createElement("div");
    card.classList.add("col-md-3", "mb-4", "px-3"); // Bootstrap classes for 4 columns in a row

    card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" class="card-img-top" alt="Movie Poster">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;

    // Append the card to the movieContainer
    movieContainer.appendChild(card);
  });

  // Append the card to the movieContainer
  // myTextDiv.appendChild(card);

  // movies.forEach((movie) => {
  //   console.log(movie.title);
  // });

  //  movies.map((movie) => console.log(movie.title));
}

fetchingMovieData();
