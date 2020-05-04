import React from 'react';
import { connect } from 'react-redux';
import SearchContainer from './components/Search/SearchContainer';
import LocationContainer from './components/Location/LocationContainer';
import CurrentWeatherContainer from './components/CurrentWeather/CurrentWeatherContainer';
import FiveDaysWeatherContainer from './components/FiveDaysWeather/FiveDaysWeatherContainer';

class App extends React.Component {

  render() {
    const { temperature } = this.props
    return (
      <div className={(temperature > 18) ? 'app warm' : 'app'}>
        <main>
          <SearchContainer />
          <div>
            <LocationContainer />
            <CurrentWeatherContainer />
          </div>
          <div>
            <FiveDaysWeatherContainer />
          </div>
        </main>
      </div>

    );
  }
}

const mapStateToProps = state => (
  {
    temperature: state.currentWeather.cityWeather && state.currentWeather.cityWeather.main.temp,

  });

export default connect(mapStateToProps)(App);