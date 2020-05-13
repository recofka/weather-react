import React from 'react';
import MoreDaysWeather from './MoreDaysWeather';
import { useSelector } from 'react-redux';

const MoreDaysWeatherContainer = () => {

    const weather = useSelector(({ weather }) => ({
        list: weather?.daily && [...weather.daily].splice(1)
    }))

    return <MoreDaysWeather {...weather} />

}
export default MoreDaysWeatherContainer;
