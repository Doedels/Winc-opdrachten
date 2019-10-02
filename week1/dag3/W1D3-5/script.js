let colors = ["yellow", "blue", "red", "orange"];

let index = 0;
while (index < colors.length) {
  console.log(colors[index]);
  index++;
}

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach( (elem) => {
  console.log(elem);
});
/*
Beantwoord de volgende vragen en zet dit als comment onderin je file.
1. Hoeveel regels neemt mijn for loop in beslag?
  antw: 3 (while loop: 5)
2. Hoeveel regels neemt mijn `forEach` method in beslag?
  antw: 3
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
  antw: forEach is veel leesbaarder, bijna spreek taal. Anderen zullen heel snel begrijpen wat deze code geacht wordt te doen.
4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en zonder elke property handmatig te `console.log` en. Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?
  antw: Ik heb 3 methoden gevonden, die ik hieronde gebruikt heb. gek genoeg vind ik de 3e met toch weer een for loop uiteindelijk het simpelste. En ja, dit lijkt toch verdacht veel op *itereren*

            Die for...in is ook op arrays te gebruiken:
            for (elem of colors) { console.log(elem);}
            for (elem in colors) { console.log(colors[elem]);}
            Het for...in levert index nummers op, en for...of de values

            MAAR! de for...of variant bij een object werkt dan weer niet
            for (elem of obj) { console.log(elem) }
            geeft de volgende foutmelding:
            TypeError: obj is not iterable

            Dus dan toch weer niet *itereren* .....
*/
const obj = {
    firstName: "Sander",
    lastName: "Markies",
    adres: "Castorstraat 31",
    zipCode: "3204 TA",
    city: "SPIJKENISSE",
    emptyLine: ""
};

let keyWords = Object.keys(obj); // get the keys
keyWords.forEach( elem => console.log(obj[elem]) );

let valWords = Object.values(obj); // get the values
valWords.forEach( elem => console.log(elem) );

for (elem in obj) {
    console.log(obj[elem]);
}
