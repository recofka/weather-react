import React from 'react';

const api = {
  key: "994bd4a435f53712abee778d3ae2740d",
  baseURL: "https://api.openweathermap.org/data/2.5"
}
function App() {

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
    <div className="app ">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location">Amsterdam, NL</div>
          <div className="date">{dataBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temperature"> 15.c</div>
          <div className="weather-state">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
