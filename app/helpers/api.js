import axios from 'axios';

const _baseURL = 'http://api.openweathermap.org/data/2.5/';
const _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map((key) => key + '=' + encodeURIComponent(queryStringData[key]))
    .join('&')
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

export function getCurrentWeather (city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('weather', queryStringData);

  return axios.get(url)
    .then((currentWeatherData) => currentWeatherData.data);
}

export function getForecast (city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('forecast/daily', queryStringData);

  return axios.get(url)
    .then((forecastData) => forecastData.data);
}