// https://rapidapi.com/weatherbit/api/weather/
//https://github.com/browserify/browserify
// https://www.weatherbit.io/api/weather-forecast-16-day
// https://day.js.org/en/

const today = document.getElementById('current-day');
const dayjs = require('dayjs');
const calendar = require('dayjs/plugin/calendar');

//import dayjs from 'dayjs' // ES 2015
const dateToString = dayjs('2022-07-20').toString();
console.log(dateToString.substring(0, 3));
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

// async function TestData() {
//   const response = await fetch('testData.json');
//   const data = await response.json();
//   return data;
// }

// TestData().then((response) => {
//   const todaysForecast = response[0];
//   today.innerHTML = getDataHtml(todaysForecast);
//   let sixteenDayForecast = response;
//   document.querySelector('main').innerHTML = displayData(sixteenDayForecast);
// });
// call 1
axios
  .request(options)
  .then(function (response) {
    let sixteenDayForecast = response.data.data;
    const todaysForecast = sixteenDayForecast[0];
    today.innerHTML = getDataHtml(todaysForecast);

    sixteenDayForecast.shift();
    console.log(sixteenDayForecast);
    document.querySelector('main').innerHTML = displayData(sixteenDayForecast);
  })
  .catch(function (error) {
    console.error(error);
  });

// get data html for one day
function getDataHtml(day) {
  let dateToString = dayjs(day.datetime).toString();
  let currentDate = day.datetime;
  // map through the array and create the HTML needed
  return ` <div class="single-day-forecast">
          <div class="day"><h2>${dateToString.substring(0, 3)}</h2> </div>
          <div class=""><h3>${currentDate.substring(5)}</h3></div>
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
const day = date.getDay();
console.log(day);
// display data
