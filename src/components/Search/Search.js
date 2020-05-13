import React from 'react';

const Search = ({ fetchCoordinates }) => {
    const getWeather = (e) => {
        e.preventDefault();
        return (
          fetchCoordinates(e.target.city.value),
          e.target.city.value = '')
    }

    return (
        <div className="search-box">
            <form onSubmit={getWeather}>
                <input
                    type="text"
                    name="city"
                    className="search-bar"
                    placeholder="Search..."
                />
            </form>
        </div>
    )
};

export default Search; 
