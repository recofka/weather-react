import React from 'react';
import FiveDaysWeather from './FiveDaysWeather';
import { fetchFiveDaysWeather } from '../../actions/weatherCity';
import { connect } from 'react-redux';

class FiveDaysWeatherContainer extends React.Component {

    render() {
        const { lon, lat } = this.props;
        if (lon !== "") {
            this.props.fetchFiveDaysWeather(lon, lat);
        }

        return (
            <FiveDaysWeather

            />
        )
    }
}

const mapStateToProps = state => (
    {
        lon: state.currentWeather && state.currentWeather.cityWeather.coord.lon,
        lat: state.currentWeather && state.currentWeather.cityWeather.coord.lat
    });

export default connect(mapStateToProps, { fetchFiveDaysWeather })(FiveDaysWeatherContainer);
