const age = 46;

if (age >= 18) {
  console.log("Welkom, kom binnen.");
} else {
  console.log("U bent te jong en mag helaas niet naar binnen.");
}

const isFemale = false;

if (isFemale) {
  console.log("Welkom, kom binnen.");
} else {
  console.log("Vanavond is Ladies Night, morgen bent u weer welkom.");
}

const driverStatus = "Bob";

if (driverStatus.toLowerCase() === "bob") {
  console.log("goede reis, rij voorzichtig.");
} else {
  console.log("U mag niet rijden, vraag of u met Bob mee kunt rijden.");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("U moet de hoofdprijs betalen.");
}

const naam = "Bram";

if (naam === "Bram" || naam === "Sarah") {
  console.log("u ontvangt één gratis bier!");
} else {
  console.log("u ontvangt géén gratis bier!");
}

const totalAmount = 11;

if (totalAmount >= 100) {
  console.log("je krijgt een gratis flesje champagne");
} else if (totalAmount >= 50) {
  console.log("je krijgt gratis portie nachos");
} else if (totalAmount >= 25) {
  console.log("je krijgt gratis (vega)bitterballen");
} else {
  console.log("je krijgt niets gratis.");
}
