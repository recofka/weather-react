
import { WEATHER_FETCHED } from '../actions/weatherCity';

export default (state = '', action) => {
      switch (action.type) {
            case WEATHER_FETCHED:
                  return {...state, 
                        cityWeather: action.weather}
            default:
                  return state
      }
}