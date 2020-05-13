import Search from './Search';
import { fetchCoordinates } from '../../actions/weatherCity';
import { connect } from 'react-redux';
import './search.scss';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    fetchCoordinates: (city) => dispatch(fetchCoordinates(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);