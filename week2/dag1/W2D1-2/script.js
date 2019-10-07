
const isArray = function (arr) {
    return Array.isArray(arr);
}
console.log(isArray('Winc Winc, nudge nudge')); // false
console.log(isArray([1, 2, 4, 0])); // true

const benelux = function (arr) {
    return arr.splice(0, 1);
}
console.log(benelux(["Belgie", 1, "Nederland", 2, "Luxemburg", 3])); // ["Belgie"]

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

function impeachTrump(arr) {
    arr.splice(0, 1);
    return arr;
}
console.log(impeachTrump(presidents)) // ["Obama", "Bush", "Clinton"]

const stringsTogether = function (arr) {
    return arr.join(' ');
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

const combineArrays = function (arr1, arr2) {
    console.log(arr1.concat(arr2));     
}
combineArrays([1,2,3], [4,5,6]) 
// result should be [1,2,3,4,5,6] 