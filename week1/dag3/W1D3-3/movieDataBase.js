const movie = {
  title: "From Dusk to dawn",
  duration: 108,
  stars: ["Harvey Keitel", "George Clooney", "Juliette Lewis"]
}


function bestMovieEver() {
  console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars}`);
}

bestMovieEver();
