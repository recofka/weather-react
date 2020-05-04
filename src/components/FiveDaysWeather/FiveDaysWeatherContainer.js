import React from 'react';
import FiveDaysWeather from './FiveDaysWeather';
import { connect } from 'react-redux';

class FiveDaysWeatherContainer extends React.Component {

    render() {
        const { list } = this.props;
        return (
            <FiveDaysWeather daysList={list}

            />
        )
    }
}

const mapStateToProps = state => (
    {
        list: state.listFiveDaysWeather.listWeather && state.listFiveDaysWeather.listWeather.fiveDaysWeather
    });

export default connect(mapStateToProps)(FiveDaysWeatherContainer);