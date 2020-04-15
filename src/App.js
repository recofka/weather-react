import React, { Component } from 'react';
import Search from './components/Search';

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
    console.log('dataWeather: ', dataWeather);
    this.setState({
      temperature: dataWeather.main.temp,
      city: dataWeather.name,
      country: dataWeather.sys.country,
      wind: dataWeather.wind.speed,
      description: dataWeather.weather[0].description,
      icon: dataWeather.weather[0].icon,
    })
  }

  render() {
    return (
      <div>
        <Search getWeather={this.getWeather} />
        <div>
            <div className="location-box">
              <div className="location"></div>
              <div className="date"></div>
            </div>
            <div className="weather-box">
              <div className="temperature"> °c</div>
              <div className="weather-state"></div>
              <img src={`http://openweathermap.org/img/wn/{weather.weather[0].icon}@2x.png`} alt=""/>
              
            </div>
          </div>
      </div>
    );
  }
}