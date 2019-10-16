// Functie 1: 

const sum = function (...args) {
    return args.reduce((acc, item) => acc + item);
}

console.log(sum(1, 2, 3, 4)); // 10

// Functie 2: 

const sum2 = function (arr) {
    return sum(...arr);
}

console.log(sum2([5, 6, 7, 8])); // 26
