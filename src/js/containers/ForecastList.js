import React from 'react';
import { connect } from 'react-redux';
import ForecastList from '../components/ForecastList';

const ForecastListContainer = (props) => <ForecastList {...props} />
const mapStateToProps = () => {
	console.log(arguments);
	return {};
};

export default connect(mapStateToProps)(ForecastListContainer);
