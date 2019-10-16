getMovieGenres().then(responseJSON => {
    const movies = responseJSON
    setMovieGenres(movies)
    console.log("hier is je data om iets mee te gaan doen:", responseJSON);
});

const setMovieGenres = function (movieData) {
    const moviesGenres = movieData.genres
    moviesGenres.forEach(movieGenre => {
        const listItem = document.createElement('li');
        const listItemContent = `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`
        listItem.appendChild(document.createTextNode(listItemContent));
        document.getElementById("movieGenresList").append(listItem)
    })
}

const logMovie = function (movieObject, year) {
    const results = movieObject.results.filter(item => item.release_date.includes(year))
    console.log(results[0]);
}

getMovieSearch('The Lion King', 2019).then((array) => {
    logMovie(...array)
})

getMovieSearch('Joker', 2019).then((array) => {
    logMovie(...array)
})

getMovieSearch('Toy Story 4', 2019).then((array) => {
    logMovie(...array)
})

const displayMovie = function (movieObject, year) {
    const results = movieObject.results.filter(item => item.release_date.includes(year))
    document.getElementById('best-movie-ever').innerHTML = `${results[0].title} (${year})`;
    const pItem = document.createElement('p');
    document.body.appendChild(pItem);
    pItem.innerHTML = results[0].overview;
}

getMovieSearch('From Dusk Till Dawn', 1996).then((array) => {
    displayMovie(...array)
})