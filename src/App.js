import React from 'react';
import { connect } from 'react-redux';
import SearchContainer from './components/Search/SearchContainer';
import LocationContainer from './components/Location/LocationContainer';
import WeatherContainer from './components/Weather/WeatherContainer';

class App extends React.Component {

  render() {
    const { temperature } = this.props
    return (
      <div className={(temperature > 18) ? 'app warm' : 'app'}>
        {/* //  <div className="app warm"> */}
        <main>
          <SearchContainer />
          <div>
            <LocationContainer />
            <WeatherContainer />
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