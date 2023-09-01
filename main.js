const apiKey = "f0a45cba46ee189dbe751106bfc3a36c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const tempIcon = document.querySelector(".weather-img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
  if (data.weather[0].main == "Clear") {
    tempIcon.src = "./images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    tempIcon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    tempIcon.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    tempIcon.src = "./images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    tempIcon.src = "./images/rain.png";
  }
  document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
