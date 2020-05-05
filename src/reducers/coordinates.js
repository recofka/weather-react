
import { COORD_FETCHED } from '../actions/weatherCity';

export default (state = '', action) => {
      switch (action.type) {
            case COORD_FETCHED:
                  return {
                        ...state,
                        name: action.coord.name,
                        country: action.coord.sys.country,
                        timeZone: action.coord.timeZone
                  }
            default:
                  return state
      }
}