// https://rapidapi.com/weatherbit/api/weather/
//https://github.com/browserify/browserify
// https://www.weatherbit.io/api/weather-forecast-16-day
const currentDay = document.getElementById('current-day');
const currentWeather = document.getElementById('current-weather');
const currentTemp = document.getElementById('current-temp');
const currentWind = document.getElementById('current-wind');
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
  params: { lat: '31.15', lon: '-81.36' },
  headers: {
    'X-RapidAPI-Key': '51e6d9c0admsh04df8c92ea0b8b7p1714c9jsnffa47057296b',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
  },
};

async function TestData() {
  const response = await fetch('testData.json');
  const data = await response.json();
  console.log(data);
  return data;
}

TestData().then((response) => {
  return (document.querySelector('main').innerHTML = displayData(response));
});
// // call 1
// axios
//   .request(options)
//   .then(function (response) {
//     let sixteenDayForecast = response.data.data;
//     console.log(response.data.data);
//     document.querySelector('main').innerHTML = displayData(sixteenDayForecast);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// get data html for one day
function getDataHtml(day) {
  // map through the array and create the HTML needed
  return ` <div class="single-day-forecast">
          <div class="day"><h2>${day.datetime}</h2> </div>
          <div class="icon"><img src="https://www.weatherbit.io/static/img/icons/${
            day.weather.icon
          }.png"></div>
          <div class="temp">Current Temp ${cToF(day.temp)} High ${cToF(
    day.high_temp
  )} Low ${cToF(day.low_temp)}</div>
          <div class="rain"> Chance of Rain: ${Math.round(day.pop)}%</div>
          <div class="wind">Wind Speed: ${day.wind_spd} Wind Direction: ${
    day.wind_cdir_full
  }</div>
        </div>
      `;
}

// get the data and html for the forecast arr
function displayData(forecastArr) {
  return `<div class="sixteen-day-forecast">${forecastArr
    .map(getDataHtml)
    .join('')}</div>`;
}

function cToF(temp) {
  return Math.round(temp * 1.8 + 32);
}
const date = new Date();

//   important info to know:
// TODO
// temp
// wind
// date
// precip
//  weather icon
// weather desc

currentDay.textContent = `${date.toDateString()}`;
// display data
