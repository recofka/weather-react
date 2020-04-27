import React from 'react';
import Search from './Search';


class SearchContainer extends React.Component {

  render() {
    return (
      <Search getWeather={this.props.getWeather} />
    )
  }
};

export default SearchContainer;