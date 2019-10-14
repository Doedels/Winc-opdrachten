/* fetch("https://swapi.co/api/people/1/")
  .then(response => response.json())
  .then(myJson => {
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })
De oorspronkelijke opdracht was om het bovenstaande te knippen en plakken.
ik heb nog even door geexperimenteerd. */

const getPerson = function (id) {
  return fetch(`https://swapi.co/api/people/${id}/`)
    .then(response => response.json())
}

const getVehicles = function (person) {
  return fetch(person.vehicles[0])
    .then(response => response.json())
}

getPerson(1)
  .then(getVehicles)
  .then(obj => {
    document.querySelector('header').innerHTML = `<p>${obj.name}</p>`
  })

document.querySelector('button').onclick = async () => {
  const person = await getPersonAsync(1);
  const vehicles = await getVehiclesAsync(person);

  document.getElementById("luke").innerHTML = `<p>${person.name} heeft een ${vehicles.name} als voertuig</p>`
}

