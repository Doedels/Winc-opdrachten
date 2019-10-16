getMovies().then(myJson => {
    document.body.innerHTML =
        `<h1>data:</h1><pre>${JSON.stringify(myJson, null, ' ')}</pre>`;
})