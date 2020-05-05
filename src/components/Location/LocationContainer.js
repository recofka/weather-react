import React from 'react';
import Location from './Location';
import { Unix_timestamp } from '../../Helper';
import { connect } from 'react-redux';

class LocationContainer extends React.Component {
    dataBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    }

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

