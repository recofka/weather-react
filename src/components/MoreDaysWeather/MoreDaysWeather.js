import React from "react";
import { Unix_timestamp } from './../../Helper'


export default ({ daysList }) => {
    if (!daysList) {
        return (<div></div>)
    }

    return (
        <div className="five-weather-box">
            <div className="days-weather-block">
                {daysList.map(list => {
                    return (
                        <div className="days-weather" key={list.dt}>
                            <p>{Unix_timestamp(list.dt)}</p>
                            <p>Max: {Math.round(list.temp.min)} °c</p>
                            <p>Min: {Math.round(list.temp.max)} °c</p>
                            <p>Main Condition: {list.weather[0].main}</p>

                        </div>)
                }
                )
                }
            </div>
        </div>);
}
