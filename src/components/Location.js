import React from "react";

export default ({ city, location, date }) => {
    if (!city) {
        return (<div> </div>)
    }
    return (
        <div className="location-box">
            <div className="location">{city} - {location}</div>
            <div className="date">{date}</div>
        </div>)
};

