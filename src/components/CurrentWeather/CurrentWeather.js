/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";


export default ({ temperature, weatherState, icon }) => {
    if (!temperature) {
        return (
            <div className="current-weather-box">
                <div className=" type-city"></div>
            </div>
        )
    }

    return (
        <div className="current-weather-box">
            <div className="temp-icon">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icon wheather" />
                <p>{Math.round(temperature)}°c</p>
            </div>
            <p className="weather-state">{weatherState}</p>
        </div>);
}
