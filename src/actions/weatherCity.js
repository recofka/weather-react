import request from 'superagent';
import { api } from '../constants';
import { COORD_FETCHED, WEATHER_FETCHED} from './actionsType';

const handleResponse = (type, payload) => ({
    type,
    payload: payload
});

export const fetchCoordinates = (city) => (dispatch) => {
  return request(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key} `)
    .then(response => {
        dispatch(handleResponse(COORD_FETCHED, response.body))
        return response.body.coord
    })
    .then(({ lon, lat }) => {
      return request(`${api.baseURL}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&APPID=${api.key} `)
        .then(response => dispatch(handleResponse(WEATHER_FETCHED, response.body)))
    })
    .catch(console.error)
};
