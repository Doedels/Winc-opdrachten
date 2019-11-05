const names = [
    {
        name: "Yasmijn",
        surname: "van Vliet",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Victor",
        surname: "van Loon",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Ido",
        surname: "van den Heuvel",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Rob",
        surname: "van den Brink",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Thijs",
        surname: "van Vliet",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Christien",
        surname: "Schouten",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Bart van der",
        surname: "Meer",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Lotte van den",
        surname: "Brink",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Suzanne",
        surname: "Bakker",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Doortje van den",
        surname: "Brink",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Tineke de",
        surname: "Ruiter",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Hanneke",
        surname: "Wolters",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Geert de",
        surname: "Ruiter",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Gerard van den",
        surname: "Berg",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Christien",
        surname: "Mulder",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Thomas van",
        surname: "Dijk",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Kees van der",
        surname: "Horst",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Wouter de",
        surname: "Ruiter",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Suzanne van den",
        surname: "Heuvel",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Mirthe",
        surname: "Kuiper",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Jacolien van",
        surname: "Wijk",
        gender: "female",
        region: "Netherlands"
    },
    { name: "Laurens", surname: "Bakker", gender: "male", region: "Netherlands" },
    { name: "Dirk", surname: "Bos", gender: "male", region: "Netherlands" },
    {
        name: "Hendrika de",
        surname: "Ruiter",
        gender: "female",
        region: "Netherlands"
    },
    { name: "Peter de", surname: "Leeuw", gender: "male", region: "Netherlands" },
    { name: "Chris", surname: "Kramer", gender: "male", region: "Netherlands" },
    { name: "Thijs de", surname: "Wit", gender: "male", region: "Netherlands" },
    {
        name: "Maartje van",
        surname: "Loon",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Sander de",
        surname: "Ruiter",
        gender: "male",
        region: "Netherlands"
    },
    { name: "Evert", surname: "Dekker", gender: "male", region: "Netherlands" },
    {
        name: "Hendrika",
        surname: "Willems",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Lieke van",
        surname: "Vliet",
        gender: "female",
        region: "Netherlands"
    },
    { name: "Luuk de", surname: "Wit", gender: "male", region: "Netherlands" },
    {
        name: "Heleen de",
        surname: "Haan",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Neeltje",
        surname: "Schouten",
        gender: "female",
        region: "Netherlands"
    },
    { name: "Niek de", surname: "Groot", gender: "male", region: "Netherlands" },
    {
        name: "Tineke",
        surname: "Kuijpers",
        gender: "female",
        region: "Netherlands"
    },
    { name: "Eelco", surname: "Prins", gender: "male", region: "Netherlands" },
    {
        name: "Thea",
        surname: "Hoekstra",
        gender: "female",
        region: "Netherlands"
    },
    { name: "Arjan van", surname: "Beek", gender: "male", region: "Netherlands" },
    { name: "Reinout", surname: "Prins", gender: "male", region: "Netherlands" },
    {
        name: "Nelleke",
        surname: "Molenaar",
        gender: "female",
        region: "Netherlands"
    },
    { name: "Niek de", surname: "Graaf", gender: "male", region: "Netherlands" },
    {
        name: "Carlijn van der",
        surname: "Horst",
        gender: "female",
        region: "Netherlands"
    },
    { name: "Eva", surname: "Scholten", gender: "female", region: "Netherlands" },
    { name: "Pieter", surname: "Jonker", gender: "male", region: "Netherlands" },
    { name: "Twan", surname: "Vink", gender: "male", region: "Netherlands" },
    {
        name: "Femke",
        surname: "Brouwer",
        gender: "female",
        region: "Netherlands"
    },
    { name: "Twan de", surname: "Vos", gender: "male", region: "Netherlands" },
    { name: "Rob", surname: "Vos", gender: "male", region: "Netherlands" },
    { name: "Michiel de", surname: "Vos", gender: "male", region: "Netherlands" },
    {
        name: "Wies van der",
        surname: "Horst",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Jaap van de",
        surname: "Velde",
        gender: "male",
        region: "Netherlands"
    },
    {
        name: "Johanneke van",
        surname: "Loon",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Mirthe van",
        surname: "Veen",
        gender: "female",
        region: "Netherlands"
    },
    {
        name: "Leentje",
        surname: "Wolters",
        gender: "female",
        region: "Netherlands"
    }
];

const getRandomPhoneNumber = () => {
    return Math.floor(Math.random() * 1000000000)
}

export const tandartsenArray = names.splice(0, 4).map((tandarts, index) => {
    return {
        name: tandarts.name,
        surname: tandarts.surname,
        ziek: false,
        id: index,
        email: `${tandarts.name}@tandartspraktijkbvt.nl`,
        phone: getRandomPhoneNumber()
    }
});

export const assistentenArray = names.splice(0, 2).map((assistent, index) => {
    return {
        name: assistent.name,
        surname: assistent.surname,
        ziek: false,
        id: index,
        email: `${assistent.name}@tandartspraktijkbvt.nl`,
        phone: getRandomPhoneNumber()
    }
});

export const patientenArray = names.map((patient, index) => {
    return {
        name: patient.name,
        surname: patient.surname,
        ziek: false,
        id: index,
        email: `${patient.name.split(' ').join('')}${patient.surname}@xs4all.nl`,
        phone: getRandomPhoneNumber()
    }
});