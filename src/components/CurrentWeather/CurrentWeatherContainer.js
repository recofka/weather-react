import React from 'react';
import CurrentWeather from './CurrentWeather';
import { connect } from 'react-redux';
import './currentWeather.scss';


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
        temperature: state.weather && state.weather.current.temp,
        weatherState: state.weather && state.weather.current.weather[0].description,
        icon: state.weather && state.weather.current.weather[0].icon

    });

export default connect(mapStateToProps)(CurrentWeatherContainer);
