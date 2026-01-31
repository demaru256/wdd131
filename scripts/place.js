// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather values (must match HTML)
const temperature = 10; // °C
const windSpeed = 12;   // km/h

document.getElementById("temp").textContent = temperature;
document.getElementById("speed").textContent = windSpeed;

// Wind chill function (one-line return)
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;
}

// Conditional calculation
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

document.getElementById("windchill").textContent = windChill;
