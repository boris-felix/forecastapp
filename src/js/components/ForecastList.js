import React from 'react';
import _ from 'lodash';
import Day from './Day';

const ForecastList = ({ list }) => {
	return (
		<ol className="col-md-12">
			{_.map(list, (forecast, date, list) => {
				return (
					<Day forecast={forecast} date={date} key={date} />
				);
			})}
		</ol>
	);
}

export default ForecastList;