const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// - Maak een array van alle superhelden namen
let namen = superheroes.map( e => e.name);
console.log(namen); 

// - Maak een array van alle "lichte" superhelden (< 190 pounds)
let lichtGewichten = superheroes.filter( e => e.weight < 190);
console.log(lichtGewichten);

// - Maak een array met de **namen** van de superhelden die 200 pounds wegen
let zwaarGewichten = superheroes.filter( e => e.weight > 200).map( e => e.name);
console.log(zwaarGewichten);

// - Maak een array met alle comics waar de superhelden hun "first apprearances" hebben gehad
let eersteKeer = superheroes.map( e => e.first_appearance).filter( e => e != undefined);
console.log(eersteKeer);

// - Maak een array met alle superhelden van DC Comics en een array met alle superhelden van Marvel Comics
let dc = superheroes.filter( e => e.publisher == "DC Comics");
let marvel = superheroes.filter( e => e.publisher == "Marvel Comics");
console.log(dc.map( e => e.name), marvel.map( e => e.name));

// - Tel het gewicht van alle superhelden van DC Comics bij elkaar op
let totaalGewichtDC = dc.reduce( (acc, e) => {
    return acc + parseInt(e.weight);
},0);
console.log(totaalGewichtDC);

// - Doe hetzelfde met alle superhelden van Marvel Comics
let totaalGewichtMarvel = marvel.filter( e => e.weight != "unknown").reduce( (acc, e) => {
    return acc + parseInt(e.weight);
},0);
console.log(totaalGewichtMarvel);

// - Bonus: vind de zwaarste superheld !
let zwaarste = superheroes.reduce( (acc, e) => {
    if (parseInt(e.weight) > parseInt(acc.weight)) {
        acc = e;
    }
    return acc;
});
console.log(zwaarste.name);







