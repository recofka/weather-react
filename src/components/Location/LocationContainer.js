import React from 'react';
import Location from './Location';
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
        const { country, city } = this.props;
        return (
            <Location
                city={city}
                location={country}
                date={this.dataBuilder(new Date())}
            />
        )
    }
};

const mapStateToProps = state => (
    {
        country: state.weather.cityWeather && state.weather.cityWeather.sys.country,
        city: state.weather.cityWeather && state.weather.cityWeather.name

    });

export default connect(mapStateToProps)(LocationContainer);


