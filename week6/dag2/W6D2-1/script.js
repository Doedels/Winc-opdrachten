const names = [
  {
    name: "Yasmijn van",
    surname: "Vliet",
    gender: "female",
    region: "Netherlands"
  },
  {
    name: "Victor van",
    surname: "Loon",
    gender: "male",
    region: "Netherlands"
  },
  {
    name: "Ido van den",
    surname: "Heuvel",
    gender: "male",
    region: "Netherlands"
  },
  {
    name: "Rob van den",
    surname: "Brink",
    gender: "male",
    region: "Netherlands"
  },
  {
    name: "Thijs van",
    surname: "Vliet",
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

const tandartsen = names.splice(0, 4);
const assistenten = names.splice(0, 2);
const patienten = names.map((patient, index) => {
  return { ...patient, id: index }
});

const getRandomName = () => {
  const person = names[Math.floor(Math.random() * 50)];
  return `${person.name} ${person.surname}`;
};

const getRandomTime = () => {
  let goodTime = false;
  let hour;
  while (goodTime === false) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      goodTime = true;
    }
  }
  return `${hour}:00u`;
};

const createDayView = () => {
  const appointments = [];

  for (i = 0; i < 30; i++) {
    appointments.push(`<li class="appointment">
      <div class="time">${getRandomTime()}</div>
      <div class="patient">Patiënt: ${getRandomName()}</div>
      <div class="dentist">Tandarts: ${getRandomName()}</div>
      <div class="assistant">Assistent: ${getRandomName()}</div>
      </li>`);
  }
  document.querySelector(".dayview").innerHTML = appointments.join("");
};

const createDayOnCalendar = numAppointments => {
  const appointments = [];
  for (let i = 0; i < numAppointments; i++) {
    appointments.push(`
      <div class="appointment">
        <span class="time">${getRandomTime()}</span>
        <span class="patient">${getRandomName()}</span>
      </div>`);
  }
  return `<div class="day">${appointments.join("")}</div>`;
};

const createCalendarView = () => {
  const days = [];

  for (let i = 1; i < 28; i++) {
    if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
      continue;
    }
    days.push(createDayOnCalendar(5));
  }
  document.querySelector(".calendarview .table").innerHTML = days.join("");
};

const start = () => {
  try {
    createDayView();
  } catch { }

  try {
    createCalendarView();
  } catch { }

  console.log(tandartsen);
  console.log(assistenten);
  console.log(patienten[0]);
  console.log(patienten.length);

};

document.addEventListener("DOMContentLoaded", start);
