import React from 'react';
import MoreDaysWeather from './MoreDaysWeather';
import { fetchWeather } from '../../actions/weatherCity';
import { connect } from 'react-redux';

class MoreDaysWeatherContainer extends React.Component {

    render() {
        const { lon, lat } = this.props;
        if (lon !== "") {
            this.props.fetchWeather(lon, lat);
        }

        return (
            <MoreDaysWeather
            />
        )
    }
}

const mapStateToProps = state => (
    {
        lon: state.coordinates && state.coordinates.cityCoord.lon,
        lat: state.coordinates && state.coordinates.cityCoord.lat
    });

export default connect(mapStateToProps, { fetchWeather })(MoreDaysWeatherContainer);
