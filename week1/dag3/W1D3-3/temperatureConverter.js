function celsiusToFahrenheit(temp) {
  console.log(`${temp}°C is ${(temp * 9 / 5) + 32}°F`);
}

function fahrenheitToCelsius(temp) {
  console.log(`${temp}°F is ${(temp - 32) * 5 / 9}°C`);
}

celsiusToFahrenheit(21);
fahrenheitToCelsius(95);
