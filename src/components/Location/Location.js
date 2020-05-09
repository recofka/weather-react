/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import RoomIcon from '@material-ui/icons/Room';

export default ({ city, location, date }) => {
    if (!city) {
        return (
            <div className="location-box">
                <div className="location">
                    <p className="location-city">Type your city</p>
                </div>
            </div>
        )
    }
    return (
        <div className="location-box">
            <div className="location">
                <p className="location-city">{city} - {location}</p>
                <RoomIcon className="location-icon" />
            </div>
            <div className="location-date">
                <p className="date">{date}</p>
            </div>
        </div>)
};

