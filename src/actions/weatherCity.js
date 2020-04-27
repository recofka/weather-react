import request from 'superagent';
import { api } from '../constants';

// ####Fetch City => Weather####
export const WEATHER_FETCHED = 'WEATHER_FETCHED';

const weatherFetched = weather => ({
  type: WEATHER_FETCHED,
  weather
});

export const fetchWeather = (city) => (dispatch, getState) => {
  if (getState().city)
    return
  request(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key} `)
    .then(response => {
      dispatch(weatherFetched(response.body))
    })
    .catch(console.error)
};

