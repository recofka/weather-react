import request from 'superagent';
import { api } from '../constants';

// ####Fetch City => Actual Weather####
export const WEATHER_FETCHED = 'WEATHER_FETCHED';

const weatherCurrentFetched = weather => ({
  type: WEATHER_FETCHED,
  weather
});

export const fetchCurrentWeather = (city) => (dispatch, getState) => {
  if (getState().city)
    return
  request(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key} `)
    .then(response => {
      dispatch(weatherCurrentFetched(response.body))
    })
    .catch(console.error)
};

// ####Fetch City => Weather per hour 5 days####
export const FIVE_DAYS_WEATHER_FETCHED = 'FIVE_DAYS_WEATHER_FETCHED';

const fiveDaysWeatherFetched = fiveDaysWeather => ({
  type: FIVE_DAYS_WEATHER_FETCHED,
  fiveDaysWeather
});

export const fetchFiveDaysWeather = (lon, lat) => (dispatch, getState) => {
  if (getState().lon)
    return
  request(`${api.baseURL}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&APPID=${api.key} `)
    .then(response => {
      dispatch(fiveDaysWeatherFetched(response.body.list))
      console.log('response', response.body)
    })
    .catch(console.error)
};

