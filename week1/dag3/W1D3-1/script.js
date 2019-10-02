const person = {
  name: "Sander",
  age: 46
};

console.log(person);
console.log(person.name);
console.log(person.age);

let myArray = ["groen", "blauw", "rood"]

console.log(myArray);
console.log(myArray[0]);

myArray[3] = "geel";
myArray.push(5);
console.log(myArray.length);  // verwachting = 5
console.log(myArray);
