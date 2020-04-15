import React from 'react';

const Search = props => (
    <div className="search-box">
        <form onSubmit={props.getWeather}>
            <input
                type="text"
                name="city"
                className="search-bar"
                placeholder="Search..."
            />
        </form>
    </div>)

export default Search;
