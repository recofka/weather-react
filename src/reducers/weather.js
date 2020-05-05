
import { WEATHER_FETCHED } from '../actions/weatherCity';

export default (state = '', action) => {
    switch (action.type) {
        case WEATHER_FETCHED:
            return {
                ...state,
                current: action.weatherFetched.current,
                daily: action.weatherFetched.daily
            }
        default:
            return state
    }
}
