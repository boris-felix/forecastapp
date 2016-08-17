import React from 'react';
import { connect } from 'react-redux';
import ForecastList from '../components/ForecastList';

const ForecastListContainer = (props) => <ForecastList {...props} />
const a = ({ forecast, daytime }) => ({ list: forecast.list, daytime });

const Container = connect(a)(ForecastListContainer);

export default Container;