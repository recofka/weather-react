import React from 'react';
import CurrentWeather from './CurrentWeather';
import { useSelector } from 'react-redux';
import './currentWeather.scss';

const CurrentWeatherContainer = () => {

    const weather = useSelector(({ weather }) => ({
        temperature: weather?.current?.temp,
        weatherState: weather?.current?.weather[0].description,
        icon: weather?.current?.weather[0].icon,
        humidity: weather?.current?.humidity,
        wind: weather?.current?.wind_speed,
        feelsLike: weather?.current?.feels_like
    }))

    return <CurrentWeather {...weather} />
}

export default CurrentWeatherContainer;