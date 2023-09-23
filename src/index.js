function searchCity(city) {
  let apiKey = "4d87a2ffe1da18c5423d5e37daeb5574";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}
function displayTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML =Math.round(response.data.main.temp);
}

function showPosition(position) {
  let apiKey = "4d87a2ffe1da18c5423d5e37daeb5574";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector(".currentlocation-button");
button.addEventListener("click", getCurrentPosition);
let now = new Date();

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[now.getDay()];

let currentTime = document.querySelector("#date");
currentTime.innerHTML = `${currentDay},${hours}:${minutes}`;

function updateCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#search-city");
  cityElement.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", updateCity);

let temperatureElement = document.querySelector("#temperature");
let currentUnit = document.querySelector("#temperature-unit");
let changeUnit = document.querySelector("#unit-sub");
changeUnit.addEventListener("click", function (event) {
  event.preventDefault();
  let flag = event.target.innerText;
  if (flag === "°F") {
    temperatureElement.innerHTML = 40;
    currentUnit.innerHTML = "F";
    changeUnit.innerHTML = "°C";
  } else {
    temperatureElement.innerHTML = 18;
    currentUnit.innerHTML = "C";
    changeUnit.innerHTML = "°F";
  }
});
