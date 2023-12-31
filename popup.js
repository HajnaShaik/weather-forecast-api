// document.addEventListener('DOMContentLoaded', function() {
//   var getWeatherButton = document.getElementById('get-weather-button');
//   getWeatherButton.addEventListener('click', function() {
//     var cityInput = document.getElementById('city-input');
//     var cityName = cityInput.value;
//     getWeather(cityName);
//   });
// });

// function getWeather(cityName) {
//   var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(cityName) + '&appid=b3b55ce55465d53b0361293bdd77af4e&units=metric';

//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       displayWeather(data);
//     })
//     .catch(function(error) {
//       console.log('Error:', error);
//     });
// }

// function displayWeather(data) {
//   var weatherDetails = document.getElementById('weather-details');
//   weatherDetails.innerHTML = '';

//   var temperature = data.main.temp;
//   var description = data.weather[0].description;
//   var humidity = data.main.humidity;
//   var windSpeed = data.wind.speed;

//   var temperatureElement = createWeatherElement("temperature-icon.png", "    Temperature: " + temperature + " °C");
//   var descriptionElement = createWeatherElement("description-icon.png", "    Description: " + description);
//   var humidityElement = createWeatherElement("humidity-icon.png", "    Humidity: " + humidity + "%");
//   var windSpeedElement = createWeatherElement("wind-icon.png", "    Wind Speed: " + windSpeed + " m/s");

//   weatherDetails.appendChild(temperatureElement);
//   weatherDetails.appendChild(descriptionElement);
//   weatherDetails.appendChild(humidityElement);
//   weatherDetails.appendChild(windSpeedElement);
// }

// function createWeatherElement(iconSrc, text) {
//   var element = document.createElement('div');
//   var icon = document.createElement('img');
//   icon.src = iconSrc;
//   element.appendChild(icon);
//   var textNode = document.createTextNode(text);
//   element.appendChild(textNode);
//   return element;
// }


// document.addEventListener('DOMContentLoaded', function() {
//   var getWeatherButton = document.getElementById('get-weather-button');
//   var getForecastButton = document.getElementById('get-forecast-button');

//   getWeatherButton.addEventListener('click', function() {
//     var cityInput = document.getElementById('city-input');
//     var cityName = cityInput.value;
//     getWeather(cityName);
//   });

//   getForecastButton.addEventListener('click', function() {
//     var cityInput = document.getElementById('city-input');
//     var cityName = cityInput.value;
//     getForecast(cityName);
//   });
// });

// function getWeather(cityName) {
//   var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(cityName) + '&appid=b3b55ce55465d53b0361293bdd77af4e&units=metric';

//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       displayWeather(data);
//     })
//     .catch(function(error) {
//       console.log('Error:', error);
//     });
// }

// function getForecast(cityName) {
//   var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + encodeURIComponent(cityName) + '&appid=b3b55ce55465d53b0361293bdd77af4e&units=metric';

//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       downloadForecast(data);
//     })
//     .catch(function(error) {
//       console.log('Error:', error);
//     });
// }

// function displayWeather(data) {
//   var weatherDetails = document.getElementById('weather-details');
//   weatherDetails.innerHTML = '';

//   var temperature = data.main.temp;
//   var description = data.weather[0].description;
//   var humidity = data.main.humidity;
//   var windSpeed = data.wind.speed;

//   var temperatureElement = createWeatherElement("temperature-icon.png", "    Temperature: " + temperature + " °C");
//   var descriptionElement = createWeatherElement("description-icon.png", "    Description: " + description);
//   var humidityElement = createWeatherElement("humidity-icon.png", "    Humidity: " + humidity + "%");
//   var windSpeedElement = createWeatherElement("wind-icon.png", "    Wind Speed: " + windSpeed + " m/s");

//   weatherDetails.appendChild(temperatureElement);
//   weatherDetails.appendChild(descriptionElement);
//   weatherDetails.appendChild(humidityElement);
//   weatherDetails.appendChild(windSpeedElement);
// }

// function createWeatherElement(iconSrc, text) {
//   var element = document.createElement('div');
//   var icon = document.createElement('img');
//   icon.src = iconSrc;
//   element.appendChild(icon);
//   var textNode = document.createTextNode(text);
//   element.appendChild(textNode);
//   return element;
// }

// function downloadForecast(data) {
//   var jsonData = JSON.stringify(data);
//   var blob = new Blob([jsonData], { type: 'application/json' });
//   var url = URL.createObjectURL(blob);
//   var a = document.createElement('a');
//   a.href = url;
//   a.download = 'forecast.json';
//   a.click();
//   URL.revokeObjectURL(url);
// }

document.addEventListener('DOMContentLoaded', function() {
  var getWeatherButton = document.getElementById('get-weather-button');
  var getForecastButton = document.getElementById('get-forecast-button');

  getWeatherButton.addEventListener('click', function() {
    var cityInput = document.getElementById('city-input');
    var cityName = cityInput.value;
    getWeather(cityName);
  });

  getForecastButton.addEventListener('click', function() {
    var cityInput = document.getElementById('city-input');
    var cityName = cityInput.value;
    getForecast(cityName);
  });
});

function getWeather(cityName) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(cityName) + '&appid=b3b55ce55465d53b0361293bdd77af4e&units=metric';

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayWeather(data);
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}

function getForecast(cityName) {
  var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + encodeURIComponent(cityName) + '&appid=b3b55ce55465d53b0361293bdd77af4e&units=metric';

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayForecast(data);
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}

function displayWeather(data) {
  var weatherDetails = document.getElementById('weather-details');
  weatherDetails.innerHTML = '';

  var temperature = data.main.temp;
  var description = data.weather[0].description;
  var humidity = data.main.humidity;
  var windSpeed = data.wind.speed;

  var temperatureElement = createWeatherElement("temperature-icon.png", "    Temperature: " + temperature + " °C");
  var descriptionElement = createWeatherElement("description-icon.png", "    Description: " + description);
  var humidityElement = createWeatherElement("humidity-icon.png", "    Humidity: " + humidity + "%");
  var windSpeedElement = createWeatherElement("wind-icon.png", "    Wind Speed: " + windSpeed + " m/s");

  weatherDetails.appendChild(temperatureElement);
  weatherDetails.appendChild(descriptionElement);
  weatherDetails.appendChild(humidityElement);
  weatherDetails.appendChild(windSpeedElement);
}

function displayForecast(data) {
  var forecastDetails = document.getElementById('forecast-details');
  forecastDetails.innerHTML = '';

  var forecastList = data.list;

  forecastList.forEach(function(forecast) {
    var dateTime = forecast.dt_txt;
    var temperature = forecast.main.temp;
    var description = forecast.weather[0].description;
    var humidity = forecast.main.humidity;
    var windSpeed = forecast.wind.speed;

    var forecastElement = document.createElement('div');

    var dateTimeElement = createForecastElement("datetime-icon.png", "    Date & Time: " + dateTime);
    var temperatureElement = createForecastElement("temperature-icon.png", "    Temperature: " + temperature + " °C");
    var descriptionElement = createForecastElement("description-icon.png", "    Description: " + description);
    var humidityElement = createForecastElement("humidity-icon.png", "    Humidity: " + humidity + "%");
    var windSpeedElement = createForecastElement("wind-icon.png", "    Wind Speed: " + windSpeed + " m/s");

    forecastElement.appendChild(dateTimeElement);
    forecastElement.appendChild(temperatureElement);
    forecastElement.appendChild(descriptionElement);
    forecastElement.appendChild(humidityElement);
    forecastElement.appendChild(windSpeedElement);

    forecastDetails.appendChild(forecastElement);
  });
}

function createWeatherElement(iconSrc, text) {
  var element = document.createElement('div');
  var icon = document.createElement('img');
  icon.src = iconSrc;
  element.appendChild(icon);
  var textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return element;
}

function createForecastElement(iconSrc, text) {
  var element = document.createElement('div');
  var icon = document.createElement('img');
  icon.src = iconSrc;
  element.appendChild(icon);
  var textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return element;
}

function downloadForecast(data) {
  var jsonData = JSON.stringify(data);
  var blob = new Blob([jsonData], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'forecast.json';
  a.click();
  URL.revokeObjectURL(url);
}
