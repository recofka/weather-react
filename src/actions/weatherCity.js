import request from 'superagent';
import { api } from '../constants';



// ####Fetch City => Weather####
export const WEATHER_FETCHED = 'WEATHER_FETCHED';

const weatherFetched = weather => ({
  type: WEATHER_FETCHED, weather,
});

export const fetchWeather = () => (dispatch, getState) => {

  request(`${api.baseURL}weather?q=Amsterdam&units=metric&APPID=${api.key} `)
    .then(response => {
      dispatch(weatherFetched(response.body))
    })
    .catch(console.error)
};




// export const ROBOTS_FETCHED = 'ROBOTS_FETCHED';

// const robotsFetched = robots => ({
//   type: ROBOTS_FETCHED, robots,
// });

// export const fetchRobots = () => (dispatch) => {
//   request('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//       dispatch(robotsFetched(response.body));
//     })
//     // eslint-disable-next-line no-console
//     .catch(console.error);
// };