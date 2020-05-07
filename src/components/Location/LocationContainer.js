import React from 'react';
import Location from './Location';
import { Unix_timestamp } from '../../Helper';
import { connect } from 'react-redux';
import './index.scss';

class LocationContainer extends React.Component {
    render() {
        const { country, city, date } = this.props;
        return (
            <Location
                city={city}
                location={country}
                date={Unix_timestamp(date)}
            />
        )
    }
};

const mapStateToProps = state => (
    {
        country: state && state.coordinates.country,
        city: state && state.coordinates.name,
        date: state.weather && state.weather.current.dt
    });

export default connect(mapStateToProps)(LocationContainer);
