const API_KEY = 'ad693d680cfe90967dd51d4a60ee761c';

const getMovies = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    const result = fetch(apiUrl, { method: 'GET' })
        .then(response => response.json())
        .catch(error => console.log(error))
    return await result;
}
