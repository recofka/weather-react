/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { Fragment } from "react";

export default ({ temperature, weatherState, icon, humidity, wind, feelsLike }) => (
    <div className="current-weather-box">
        <div className="temp-icon">
            {!temperature ?
                <div className=" type-city"></div>
                : (
                    <Fragment>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icon wheather" />
                        <p>{Math.round(temperature)}°c</p>
                    </Fragment>
                )}
        </div>
        {temperature && <p className="weather-state">{weatherState}</p>}
        <div className="weather-state-more">
            {temperature && <p className="">Feels Like: {Math.round(feelsLike)}°c</p>}
            {temperature && <p className="">Humidity: {humidity}%</p>}
            {temperature && <p className="">Wind Speed: {wind}km/h</p>}
        </div>
    </div>
);
