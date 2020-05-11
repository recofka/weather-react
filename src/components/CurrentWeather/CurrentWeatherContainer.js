import React from 'react';
import CurrentWeather from './CurrentWeather';
import { useSelector } from 'react-redux';
import './currentWeather.scss';

const CurrentWeatherContainer = () => {
    const weather = useSelector(({ weather }) => ({
        temperature: weather && weather.current.temp,
        weatherState: weather && weather.current.weather[0].description,
        icon: weather && weather.current.weather[0].icon

    }))
    return <CurrentWeather { ...weather }/>
  }

  export default CurrentWeatherContainer;