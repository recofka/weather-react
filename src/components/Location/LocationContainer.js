import React from 'react';
import Location from './Location';

class LocationContainer extends React.Component {

    render() {
        return (
            <Location
                city={this.props.localState.city}
                location={this.props.localState.country}
                date={this.props.date}
            />
        )
    }
};

export default LocationContainer;

