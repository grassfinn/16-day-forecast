(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// https://rapidapi.com/weatherbit/api/weather/
//https://github.com/browserify/browserify


// testData = testData.data.splice(0,10)
// console.log('test',JSON.stringify(testData));
const currentDay = document.getElementById('current-day');

const currentWeather = document.getElementById('current-weather');
const currentTemp = document.getElementById('current-temp');
const currentWind = document.getElementById('current-wind');

async function getData(){
  const response = await fetch('testData.json')
  const data = await response.json()
  console.log(data)
}
getData()


function cToF(temp) {
  return Math.round(temp * 1.8 + 32);
}
const date = new Date();

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
//   params: { lat: '31.15', lon: '-81.36' },
//   headers: {
//     'X-RapidAPI-Key': '51e6d9c0admsh04df8c92ea0b8b7p1714c9jsnffa47057296b',
//     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

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
function getDataHtml(arr) {
   let tenDayForecast =  arr.map((day, index) => {
      // console.log(index,day)
      document.querySelector('main').innerHTML += ` <div class="day-${index}-forecast">
        <div class="">${day.datetime}
        <div class="">Current Temp ${cToF(day.temp)} High ${day.high_temp} Low ${day.low_temp}</div>
        <div class=""> Chance of Rain: ${Math.round(day.precip * 100)}%</div>
        <div class="">Wind Speed: ${day.wind_spd} Wind Direction: ${day.wind_cdir_full}</div>
      </div>`
    }).join('')
    return `<div class="ten-day-forecast">${tenDayForecast}</div>`
  // currentTemp.textContent = `Current Temp: ${cToF(
  //   arr.data[0].temp
  //   )} High: ${cToF(arr.data[2].high_temp)} Low: ${cToF(
  //     arr.data[0].low_temp
  //     )}`;
  //     currentWeather.textContent = `Chance of Rain: ${Math.round(
  //       arr.data[0].precip * 100
  //       )}%`;
  //       currentWind.textContent = `Wind Speed: ${arr.data[0].wind_spd} Wind Direction: ${arr.data[0].wind_cdir_full} `;
      }

displayData(testData)
},{}]},{},[1]);
