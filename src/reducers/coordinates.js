
import { COORD_FETCHED } from '../actions/actionsType';

export default (state = '', { type, payload }) => {
    switch (type) {
        case COORD_FETCHED:
            return {
                ...state,
                name: payload.name,
                country: payload.sys.country,
                timeZone: payload.timeZone
            }
        default:
            return state
    }
}