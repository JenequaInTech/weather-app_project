// Function to fetch weather data
function getWeather() {
    const cityName = document.getElementById('cityName').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=224f9f9c3332cf6249cc04b46734f461`;

// Function to fetch weather data
function getWeather() {
    const cityName = document.getElementById('cityName').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=224f9f9c3332cf6249cc04b46734f461`;
    
    console.log(url); // This will print the URL to the console

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => updateWeatherDisplay(data))
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('There was an error fetching the weather data: ' + error.message);
        });
}

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => updateWeatherDisplay(data))
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('There was an error fetching the weather data: ' + error.message);
        });
}

// Function to display weather data
function updateWeatherDisplay(data) {
    const tempHigh = kelvinToFahrenheit(data.main.temp_max);
    const tempLow = kelvinToFahrenheit(data.main.temp_min);
    const forecastDescription = data.weather[0].description;
    const humidity = data.main.humidity;

    const display = `
        <h2>Weather for ${data.name}</h2>
        <p>High: ${tempHigh}°F</p>
        <p>Low: ${tempLow}°F</p>
        <p>Forecast: ${forecastDescription}</p>
        <p>Humidity: ${humidity}%</p>
    `;
    document.getElementById('weatherDisplay').innerHTML = display;
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
}

// Ensure the getWeather function is available globally
window.getWeather = getWeather;

function updateWeatherDisplay(data) {
    const tempHigh = kelvinToFahrenheit(data.main.temp_max);
    const tempLow = kelvinToFahrenheit(data.main.temp_min);
    const forecastDescription = data.weather[0].description;
    const humidity = data.main.humidity;

    // Update the body class based on weather
    document.body.className = data.weather[0].main.toLowerCase(); // Assumes main weather types are 'sunny', 'cloudy', 'rainy'

    const display = `
        <h2>Weather for ${data.name}</h2>
        <p>High: ${tempHigh}°F</p>
        <p>Low: ${tempLow}°F</p>
        <p>Forecast: ${forecastDescription}</p>
        <p>Humidity: ${humidity}%</p>
    `;
    document.getElementById('weatherDisplay').innerHTML = display;
}
