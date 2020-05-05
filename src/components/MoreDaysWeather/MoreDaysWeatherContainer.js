import React from 'react';
import MoreDaysWeather from './MoreDaysWeather';
import { connect } from 'react-redux';

class MoreDaysWeatherContainer extends React.Component {

    render() {
        const { list } = this.props;
        return (
            <MoreDaysWeather
                daysList={list}
            />
        )
    }
}

const mapStateToProps = state => (
    {
        list: state.weather && state.weather.daily && [...state.weather.daily].splice(1)
    });

export default connect(mapStateToProps, null)(MoreDaysWeatherContainer);
