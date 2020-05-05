import request from 'superagent';
import { api } from '../constants';

// ####Fetch City => Get coord####
export const COORD_FETCHED = 'COORD_FETCHED';

const coordinatesFetched = coord => ({
  type: COORD_FETCHED,
  coord
});

export const fetchCoordinates = (city) => (dispatch, getState) => {
  if (getState().city)
    return
  request(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key} `)
    .then(response => {
      dispatch(coordinatesFetched(response.body))
    })
    .catch(console.error)
};

// ####Fetch City => Weather per hour 5 days####
export const WEATHER_FETCHED = 'WEATHER_FETCHED';

const weatherFetched = weatherFetched => ({
  type: WEATHER_FETCHED,
  weatherFetched
});

export const fetchWeather = (lon, lat) => (dispatch, getState) => {
  if (getState().lon)
    return
  request(`${api.baseURL}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&APPID=${api.key} `)
    .then(response => {
      dispatch(weatherFetched(response.body))
    })
    .catch(console.error)
};

