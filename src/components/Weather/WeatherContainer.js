import React from 'react';
import Weather from './Weather';
import { connect } from 'react-redux';

class WeatherContainer extends React.Component {

    render() {
        const { temperature, weatherState, icon } = this.props;
        return (
            <Weather
                temperature={temperature}
                weatherState={weatherState}
                icon={icon}
            />
        )
    }
};

const mapStateToProps = state => (
    {
        temperature: state.weather.cityWeather && state.weather.cityWeather.main.temp,
        weatherState: state.weather.cityWeather && state.weather.cityWeather.weather[0].description,
        icon: state.weather.cityWeather && state.weather.cityWeather.weather[0].icon,

    });

export default connect(mapStateToProps)(WeatherContainer);


