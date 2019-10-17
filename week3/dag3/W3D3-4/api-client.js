

async function getMovieGenres() {
    const movieGenreapiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    const result = await fetch(movieGenreapiUrl, {
        method: "GET"
    })
        .then(response => response.json())
        .catch(error => console.log(error))
    return result;
}

const getMovieSearch = async function (name, year) {
    const movieSearchApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name.replace(/ /g, '%20')}`
    const result = await fetch(movieSearchApiUrl, { method: "GET" })
        .then(response => response.json())
        .catch(error => console.log(error))
    return [result, year];
}


