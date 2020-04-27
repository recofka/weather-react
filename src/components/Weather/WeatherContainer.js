import React from 'react';
import Weather from './Weather';

class WeatherContainer extends React.Component {

    render() {
        return (
            <Weather
                temperature={this.props.localState.temperature}
                weatherState={this.props.localState.description}
                icon={this.props.localState.icon}
            />
        )
    }
};

export default WeatherContainer;

