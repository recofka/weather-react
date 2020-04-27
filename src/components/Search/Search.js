import React from 'react';

export default ({ getWeather }) => (
    <div className="search-box">
        <form onSubmit={getWeather}>
            <input
                type="text"
                name="city"
                className="search-bar"
                placeholder="Search..."
            />
        </form>
    </div>)
