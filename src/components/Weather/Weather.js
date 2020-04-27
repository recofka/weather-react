import React from "react";

export default ({ temperature, weatherState, icon }) => {
    if (!temperature) {
        return (
            <div className="weather-box">
                <div className=" type-message"> Type your city</div>
            </div>
        )
    }

    return (
        <div className="weather-box">
            <div className="temperature"> {Math.round(temperature)} °c</div>
            <div className="weather-state">{weatherState}</div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>);
}
