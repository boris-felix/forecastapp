import React, { PropTypes } from 'react';
const { shape, arrayOf, string, number, object } = PropTypes;

import _ from 'lodash';
import Highlight from '../containers/Highlight';
import Day from './Day';

const ForecastList = ({ city, list, daytime }) => {
	return (
		<div className={daytime}>
			<Highlight city={city} />
				<ol className="list col-md-12 col-sm-12 col-xs-12">
				{_.map(list, (forecast, date, list) => {
					return (
						<Day forecast={forecast} date={date} key={date} />
					);
				})}
			</ol>
			<div className="background"></div>
		</div>
	);
}

ForecastList.propTypes = {
	list: arrayOf(object)
}.isRequired

export default ForecastList;