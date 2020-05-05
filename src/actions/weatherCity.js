import request from 'superagent';
import { api } from '../constants';

// ####Fetch City => Get coord####
export const COORD_FETCHED = 'COORD_FETCHED';

const coordinatesFetched = coord => ({
  type: COORD_FETCHED,
  coord
});

// ####Fetch City => Weather per hour 5 days####
export const WEATHER_FETCHED = 'WEATHER_FETCHED';

const weatherFetched = weatherFetched => ({
  type: WEATHER_FETCHED,
  weatherFetched
});


export const fetchCoordinates = (city) => (dispatch) => {
  return request(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key} `)
    .then(response => {
      dispatch(coordinatesFetched(response.body))
      return response.body.coord
    }).then(({ lon, lat }) => {
      return request(`${api.baseURL}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&APPID=${api.key} `)
        .then(response => {
          dispatch(weatherFetched(response.body))
          //Always return the primise
          return response.body;
        })
    })
    .catch(console.error)
};



