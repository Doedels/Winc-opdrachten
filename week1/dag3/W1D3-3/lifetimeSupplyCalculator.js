function calculateSupply(age, amountPerDay) {
  console.log(`You will need ${Math.round((86 - age) * 365 * amountPerDay)} to last you until the ripe old age of 86`);
}

calculateSupply(46, 1);
calculateSupply(23, 0.5);
calculateSupply(55, 1.5);
