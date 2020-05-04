
import { FIVE_DAYS_WEATHER_FETCHED } from '../actions/weatherCity';

export default (state = '', action) => {
    switch (action.type) {
        case FIVE_DAYS_WEATHER_FETCHED:
            return {
                ...state,
                listWeather: action
            }
        default:
            return state
    }
}