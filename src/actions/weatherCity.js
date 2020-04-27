import request from 'superagent';
import { api } from '../constants';

// ####Fetch City => Weather####
export const WEATHER_FETCHED = 'WEATHER_FETCHED';

const weatherFetched = cityWeather => ({
  type: WEATHER_FETCHED,
  cityWeather
});

export const fetchWeather = (city) => (dispatch, getState) => {
  request(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key} `)
    .then(response => {
      dispatch(weatherFetched(response.body))
    })
    .catch(console.error)
};

