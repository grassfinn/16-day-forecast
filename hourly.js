// https://rapidapi.com/weatherbit/api/weather/
//https://github.com/browserify/browserify
// https://www.weatherbit.io/api/weather-forecast-16-day
// https://day.js.org/en/
// browserfy
const axios = require('axios');

const dayjs = require('dayjs');
const calendar = require('dayjs/plugin/calendar');
const date = new Date();
const day = date.getDay();

let lat = null;
let long = null;

const successCallback = (position) => {
  const city = document.querySelector('.city');
  const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly',
    params: { lat: position.coords.latitude, lon: position.coords.longitude },
    headers: {
      'X-RapidAPI-Key': '51e6d9c0admsh04df8c92ea0b8b7p1714c9jsnffa47057296b',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
    },
  };
  console.log(options);

  axios
    .request(options)
    .then(function (response) {
      let forecast = response.data.data;
      city.textContent = response.data.city_name;

      document.querySelector('main').innerHTML = displayData(forecast);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const errorCallback = (error) => {
  console.log(error);
  const city = document.querySelector('.city');
  const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly',
    params: { lat: 40.71427, lon: -74.00597 },
    headers: {
      'X-RapidAPI-Key': '51e6d9c0admsh04df8c92ea0b8b7p1714c9jsnffa47057296b',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
    },
  };
  console.log(options);

  axios
    .request(options)
    .then(function (response) {
      let forecast = response.data.data;
      city.textContent = response.data.city_name;

      document.querySelector('main').innerHTML = displayData(forecast);
    })
    .catch(function (error) {
      console.error(error);
    });
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//import dayjs from 'dayjs' // ES 2015
// const dateToString = dayjs('2022-07-20').toString()
// console.log(dateToString.substring(0,3))

// async function TestData() {
//   const response = await fetch('testData.json');
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

// TestData().then((response) => {
//   return (document.querySelector('main').innerHTML = displayData(response));
// });

// call 1

// get data html for one day
function getDataHtml(day) {
  let dateToString = dayjs(day.datetime).toString();
  let currentDate = day.datetime;
  // map through the array and create the HTML needed
  return ` <div class="single-day-forecast">
  <div class=""><h3>${currentDate.substring(5)}</h3></div>
  <div class="icon"><img src="https://www.weatherbit.io/static/img/icons/${
    day.weather.icon
  }.png"></div>
  <div class="temp">Current Temp ${cToF(day.temp)}</div>
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

//   important info to know:
// TODO
// temp
// wind
// date
// precip
//  weather icon
// weather desc
// console.log(day)
// currentDay.textContent = `${date.toDateString()}`;
// display data
