import React from 'react';
import _ from 'lodash';
import Day from './Day';

const ForecastList = ({ list }) => {
	return (
		<ul className="col-md-10">
			{_.map(list, (forecast, date, list) => {
				return (
					<Day forecast={forecast} date={date} key={date} />
				);
			})}
		</ul>
	);
}

export default ForecastList;