import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import SearchContainer from './components/Search/SearchContainer';
import LocationContainer from './components/Location/LocationContainer';
import WeatherContainer from './components/Weather/WeatherContainer';



export default class components extends Component {

  render() {
    return (
      <Provider store={store}>
        {/* <div className={typeof this.state.temperature != "undefined" ? ((this.state.temperature > 18) ? 'app warm' : 'app') : 'app'}> */}
        <div className='app'>
          <main>
            <SearchContainer />
            <div>
              <LocationContainer />
              <WeatherContainer />
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}