

const getMovies = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    const result = fetch(apiUrl, { method: 'GET' })
        .then(response => response.json())
        .catch(error => console.log(error))
    return await result;
}
