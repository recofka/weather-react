
import { WEATHER_FETCHED } from '../actions/weatherCity';

export default (state = '', action) => {
      switch (action.type) {
            case WEATHER_FETCHED:
                  return [...state, action.cityWeather]
            default:
                  return state
      }
}