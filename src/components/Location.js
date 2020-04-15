import React from "react";

const Location = ({ city, location, date }) => (
    <div className="location-box">
        <div className="location">{city} - {location}</div>
        <div className="date">{date}</div>
    </div>
);

export default Location;