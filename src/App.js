import React, { useState } from 'react';

const api = {
  key: "994bd4a435f53712abee778d3ae2740d",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key} `)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dataBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={typeof weather.main != "undefined" ? ((weather.main.temp > 18) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dataBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temperature"> {Math.round(weather.main.temp)}°c</div>
              <div className="weather-state">{weather.weather[0].description}</div>
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].main} Icon`}/>
              
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
