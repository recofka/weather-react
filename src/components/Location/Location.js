/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { Unix_timestamp } from '../../Helper';
import RoomIcon from '@material-ui/icons/Room';

export default ({ city, country, date }) => (
    <div className="location-box">
        <div className="location">
            <p className="location-city">
                {city ? `${city} - ${country}` : 'Type your city'}
            </p>
            {city && <RoomIcon className="location-icon" />}
        </div>
        {city &&
            <div className="location-date">
                <p className="date">{Unix_timestamp(date)}</p>
            </div>}
    </div>
);
