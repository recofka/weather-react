import React, { Component } from 'react';
import Search from './components/Search';
import Location from './components/Location';

const api = {
  key: "994bd4a435f53712abee778d3ae2740d",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}

export default class components extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const citySearch = e.target.elements.city.value;
    const api_call = await fetch(`${api.baseURL}weather?q=${citySearch}&units=metric&APPID=${api.key} `);
    const dataWeather = await api_call.json();
    // console.log('dataWeather: ', dataWeather);
    this.setState({
      temperature: dataWeather.main.temp,
      city: dataWeather.name,
      country: dataWeather.sys.country,
      wind: dataWeather.wind.speed,
      description: dataWeather.weather[0].description,
      icon: dataWeather.weather[0].icon,
    })
  }

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
    // console.log('App state: ',this.state)
    return (
      
      <div>
        <Search getWeather={this.getWeather} />
        <div>
          <Location city={this.state.city} location={this.state.country}  date={this.dataBuilder(new Date())}/>
          <div className="weather-box">
            <div className="temperature"> 11°c</div>
            <div className="weather-state">clear sky</div>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}