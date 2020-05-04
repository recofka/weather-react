import { combineReducers } from 'redux';
import currentWeather from './currentWeather';
import listFiveDaysWeather from './fiveDaysWeather';


export default combineReducers({
    currentWeather,
    listFiveDaysWeather
});