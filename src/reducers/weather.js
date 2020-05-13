import { WEATHER_FETCHED } from '../actions/actionsType';

export default (state = '', { type, payload }) => {
    switch (type) {
        case WEATHER_FETCHED:
            return {
                ...state,
                current: payload.current,
                daily: payload.daily
            }
        default:
            return state
    }
}