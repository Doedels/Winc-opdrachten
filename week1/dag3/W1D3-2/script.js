/*
Opdracht 2a
making a bread bun with chees.
- slice and open a bread bun
- butter the opened sides of the bun
- put a slice of cheese on the open bun
- close the bun
*/

function breadBunWithCheese() {
  console.log("slice and open a bread bun");
  console.log("butter the opened sides of the bun");
  console.log("put a slice of cheese on the open bun");
  console.log("close the bun");
}

breadBunWithCheese();

// Opdracht 2b
function makeSandwich(topping) {
  console.log("slice and open a bread bun");
  console.log("butter the opened sides of the bun");
  console.log(`put ${topping} on the open bun`);
  console.log("close the bun");
  console.log(`There you go, a sandwich with ${topping}`);
}

makeSandwich("egg");

// Opdracht 2c
function calculateDiscountedPrice(totalAmount, discount) {
  return Math.round(totalAmount * (1 - discount));
}

console.log(calculateDiscountedPrice(15, 0.1));  //  expected: Math.round(13.5) = 14

// Opdracht 2d
function conditionalDiscountedPrice(totalAmount, discount) {
  if (totalAmount > 25) {
    return Math.round(totalAmount * (1 - discount));
  } else {
    return totalAmount;
  }
}

console.log(conditionalDiscountedPrice(15, 0.1));  //  expected: 15
console.log(conditionalDiscountedPrice(30, 0.1));  //  expected: Math.round(27) = 27
