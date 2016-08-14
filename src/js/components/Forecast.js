import React from 'react';
import Day from './Day';

const Forecast = ({ forecast }) => {
	return (
		<div>
			<ul>
				{
					_.map(forecast, (day, id) => {
						let { hour, temp, weather } = day;
						return <Day hour={hour} temp={temp} weather={weather} key={id} />;
					})
				}
			</ul>
		</div>
	);
};

export default Forecast;