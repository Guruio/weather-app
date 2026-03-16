const apiKey = "YOUR_API_KEY"

async function getWeather(){

const city = document.getElementById("city").value

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

const response = await fetch(url)

const data = await response.json()

const result = document.getElementById("weatherResult")

if(data.cod != 200){
    result.innerHTML = "City not found or API error"
    return
}

result.innerHTML = `
<h2>${data.name}</h2>
<p>Temperature: ${data.main.temp}°C</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Weather: ${data.weather[0].main}</p>
`

}