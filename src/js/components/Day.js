import React from 'react';
import Time from './Time';

const Day = ({ forecast, date }) => {
	return (
		<li className="day col-md-2">
			<div>{date}</div>
			<div>
				<ul>
					{_.map(forecast, (day, id) => {
						let { hour, temp, weather } = day;
						return <Time hour={hour} temp={temp} weather={weather} key={id} />;
					})}
				</ul>
			</div>
		</li>
	);
};

export default Day;