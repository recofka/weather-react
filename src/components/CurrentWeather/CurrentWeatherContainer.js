import React from 'react';
import CurrentWeather from './CurrentWeather';
import { useSelector } from 'react-redux';
import './currentWeather.scss';

const CurrentWeatherContainer = () => {

    const weather = useSelector(({ weather }) => ({
        temperature: weather?.current?.temp,
        weatherState: weather?.current?.weather[0].description,
        icon: weather?.current?.weather[0].icon
    }))

    return <CurrentWeather { ...weather }/>
  }

  export default CurrentWeatherContainer;