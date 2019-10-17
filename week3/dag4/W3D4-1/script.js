let map;
let locations = {
    Mijnsherenland: { lat: 51.799010, lng: 4.486300 },
    Amstelveen: { lat: 52.305690, lng: 4.862510 },
    Amsterdam: { lat: 52.370216, lng: 4.895168 },
    Amsterdam: { lat: 52.349579, lng: 4.903740 },
    Weesp: { lat: 52.307330, lng: 5.042610 },
    Nijmegen: { lat: 51.841690, lng: 5.858650 },
    Hoogeveen: { lat: 52.726120, lng: 6.479580 },
    Lelystad: { lat: 52.510010, lng: 5.477640 },
    Spijkenisse: { lat: 51.850460, lng: 4.325670 },
    Overveen: { lat: 52.391690, lng: 4.611600 }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.372021, lng: 5.216710 },
        zoom: 8
    });
    let markers = [];
    Object.keys(locations).forEach(key => {
        markers.push(new google.maps.Marker({
            position: locations[key],
            map: map
        }))
    });

    markers.push(new google.maps.Marker({
        position: { lat: 52.378360, lng: 4.854710 },
        icon: 'winc-round.png',
        map: map
    }))
}

// require('dotenv').config();