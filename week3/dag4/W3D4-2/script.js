
let buttonsNode = document.getElementById('buttons');
let pokemonNode = document.getElementById('pokemon');
let offset = 0;

const getPokemonApi = function () {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=100`)
        .then(response => response.json())
        .then(myJson => myJson.results)
}

const makeButtons = async function () {
    const arr = await getPokemonApi();
    buttonsNode.innerHTML = arr.reduce((acc, item) => {
        return acc + `<button name="${item.url}">${item.name}</button> `
    }, "")
    buildEventListeners();
}

const getAbilities = function (url) {
    fetch(url)
        .then(response => response.json())
        .then(object => object.abilities)
        .then(arr => {
            pokemonNode.innerHTML = arr.reduce((acc, item) => {
                return acc + `<p>ability = ${item.ability.name}</p>`
            }, "")
        })
}

const buildEventListeners = function () {
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', (event) => {
            getAbilities(event.target.name)
        });
    });
}

const volgende = function () {
    if (offset < 1000) {
        offset = offset + 100;
        makeButtons();
    }
}

const vorige = function () {
    if (offset > 0) {
        offset = offset - 100;
        makeButtons();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    makeButtons();
})

