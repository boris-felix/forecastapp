import React from 'react';
import _ from 'lodash';
import Forecast from './Forecast';

const ForecastList = ({ list }) => {
	return (
		<ul>{
			_.map(list, (forecast, date) => {
				return (
					<li key={date}>
						<div>{date}</div>
						<div>
							<Forecast forecast={forecast} />
						</div>
					</li>
				);
			})
		}</ul>
	);
}

export default ForecastList;