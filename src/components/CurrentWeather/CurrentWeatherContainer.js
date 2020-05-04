import React from 'react';
import CurrentWeather from './CurrentWeather';
import { connect } from 'react-redux';

class CurrentWeatherContainer extends React.Component {

    render() {
        const { temperature, weatherState, icon } = this.props;
        return (
            <CurrentWeather
                temperature={temperature}
                weatherState={weatherState}
                icon={icon}
            />
        )
    }
};

const mapStateToProps = state => (
    {
        temperature: state.currentWeather.cityWeather && state.currentWeather.cityWeather.main.temp,
        weatherState: state.currentWeather.cityWeather && state.currentWeather.cityWeather.weather[0].description,
        icon: state.currentWeather.cityWeather && state.currentWeather.cityWeather.weather[0].icon,

    });

export default connect(mapStateToProps)(CurrentWeatherContainer);


