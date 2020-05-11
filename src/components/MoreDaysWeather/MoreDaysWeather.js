/* eslint-disable react/display-name */
import React from "react";
import { Unix_timestamp } from './../../Helper'
import './moreDaysWeather.scss';

export default ({ daysList = [] }) => (
    <div className="days-weather-box">
        <div className="days-block">
            {daysList && daysList.map(list => (
                <div className="days-content" key={list.dt}>
                    <p className="weather-text-content">{Unix_timestamp(list.dt).slice(0, 3)}</p>
                    <img
                        className="weather-img-content"
                        src={`http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
                        alt="Icon wheather" />
                    <p className="weather-text-content">{Math.round(list.temp.min)}°c</p>
                    <p className="weather-text-content">{Math.round(list.temp.max)}°c</p>
                </div>)
            )}
        </div>
    </div>
);
