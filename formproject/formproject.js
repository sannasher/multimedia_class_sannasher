function convertToFahrenheit() {
  let celsiusInput = document.getElementById("celsius").value;
  if (celsiusInput === "" || isNaN(celsiusInput)) {
    document.getElementById("results").innerText =
      "Please enter a valid temperature in Celsius.";
    return;
  }
  let celsius = parseFloat(celsiusInput);
  let fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById(
    "results"
  ).innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

function convertToCelsius() {
  let fahrenheitInput = document.getElementById("fahrenheit").value;
  if (fahrenheitInput === "" || isNaN(fahrenheitInput)) {
    document.getElementById("results").innerText =
      "Please enter a valid temperature in Fahrenheit.";
    return;
  }
  let fahrenheit = parseFloat(fahrenheitInput);
  let celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById(
    "results"
  ).innerText = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
}
