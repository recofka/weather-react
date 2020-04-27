import React from 'react';
import Search from './Search';
import { fetchWeather } from '../../actions/weatherCity';
import { connect } from 'react-redux';

class SearchContainer extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    return this.props.fetchWeather(e.target.city.value)
  }

  render() {
    return (
      <div>
        <Search getWeather={this.getWeather} />
      </div>
    )
  }
};

export default connect(null, { fetchWeather })(SearchContainer);

