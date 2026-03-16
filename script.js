const apiKey = "fef2cb2811ed40ee5e6af071856c9ee7"

async function getWeather() {

const city = document.getElementById("city").value

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

const response = await fetch(url)

const data = await response.json()

const result = document.getElementById("weatherResult")

if(data.cod != 200){
result.innerHTML = "City not found"
return
}

const icon = data.weather[0].icon
const iconUrl =
`https://openweathermap.org/img/wn/${icon}@2x.png`

result.innerHTML = `
<h2>${data.name}</h2>
<img src="${iconUrl}">
<p>Temperature: ${Math.round(data.main.temp)}°C</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Weather: ${data.weather[0].main}</p>
`
}

/* ENTER KEY SEARCH */

document
.getElementById("city")
.addEventListener("keydown", function(event){

if(event.key === "Enter"){
getWeather()
}

})