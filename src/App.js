import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import SearchContainer from './components/Search/SearchContainer';
import LocationContainer from './components/Location/LocationContainer';
import WeatherContainer from './components/Weather/WeatherContainer';



export default class components extends Component {

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

    return (
      <Provider store={store}>
        {/* <div className={typeof this.state.temperature != "undefined" ? ((this.state.temperature > 18) ? 'app warm' : 'app') : 'app'}> */}
        <div className='app'>
          <main>
            <SearchContainer />
            <div>
              <LocationContainer date={this.dataBuilder(new Date())} />
              <WeatherContainer />
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}