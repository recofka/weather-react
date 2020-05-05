import React from 'react';
import Search from './Search';
import { fetchCoordinates } from '../../actions/weatherCity';
import { connect } from 'react-redux';

class SearchContainer extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    return (
      this.props.fetchCoordinates(e.target.city.value),
      e.target.city.value = '')
  }

  render() {
    return (
      <div>
        <Search getWeather={this.getWeather} />
      </div>
    )
  }
};

export default connect(null, { fetchCoordinates })(SearchContainer);

