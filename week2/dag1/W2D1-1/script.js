const superheroes = function(arr) {
    return arr.find( (item) => {
        return item.name == "Spiderman";
    });
}
console.log(superheroes([{name: "Batman", alter_ego: "Bruce Wayne"}, {name: "Superman", alter_ego: "Clark Kent"}, {name: "Spiderman", alter_ego: "Peter Parker"},])) 
// {name: "Spiderman", alter_ego: "Peter Parker"}

const doubleArrayValues = function (arr) {
    console.log(arr.map( (item) => item * 2));    
}
doubleArrayValues([1, 2, 3]) 
// result should be [2, 4, 6]

const isBiggerThan10 = function (arr) {
    console.log(arr.some( e => e > 10));    
}
isBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
// result should be true


const italyInTheGreat7 = function (arr) {
    console.log(arr.includes("italy"));    
}
italyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// result should be false

const duplication = function (arr) {
    return arr.map( i => i * 2);
}
console.log(duplication([1, 4, 3, 6, 9, 7, 11]))
// result should be [ 2, 8, 6, 12, 18, 14, 22 ]

const below100 = function (arr) {
    return arr.filter( i => i < 100);
}
console.log(below100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]

const bigSum = function (arr) { 
    return arr.reduce( (acc, item) => {
        return acc + item;
    }, 0);
}
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118





