/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import RoomIcon from '@material-ui/icons/Room';

export default ({ city, location, date }) => (
    <div className="location-box">
        <div className="location">
            <p className="location-city">
                {city ? `${city} - ${location}` : 'Type your city'}
            </p>
            {city && <RoomIcon className="location-icon" />}
        </div>
        {city &&
        <div className="location-date">
            <p className="date">{date}</p>
        </div>}
    </div>
);
