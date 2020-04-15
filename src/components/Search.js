import React from 'react';

const Search = props => (
    <div className="search-box">
        {console.log('prop: ', props)}
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
