import React, { PropTypes } from 'react';
const { shape, arrayOf, string, number, object } = PropTypes;

import _ from 'lodash';
import Day from './Day';

const ForecastList = ({ list }) => {
	return (
		<ol className="col-md-12 col-sm-12 col-xs-12">
			{_.map(list, (forecast, date, list) => {
				return (
					<Day forecast={forecast} date={date} key={date} />
				);
			})}
		</ol>
	);
}

ForecastList.propTypes = {
	list: arrayOf(object)
}.isRequired

export default ForecastList;