import React, { PropTypes } from 'react';
const { shape, arrayOf, string, number } = PropTypes;

import Moment from 'moment';
import Time from './Time';

const Day = ({ forecast, date }) => {
	let day = Moment(date, 'YYYY-MM-DD');
	let dayLabel = day.format('dddd');
	let todayLabel = Moment().format('dddd') === day.format('dddd') ? 'Today' : '';
	let { temp_max, temp_min } = forecast[0];
	let dayClassName = [
		'day',
		todayLabel.toLowerCase()
	].join(' ');
	let preview = Moment().format('dddd') === day.format('dddd') ? false : true;

	return (
		<li className={dayClassName}>
			<div className="header">
				<span className="day--detail pull-left col-md-6 col-sm-4 col-xs-4">
					<b>{dayLabel}</b>
					<span>{todayLabel}</span>
				</span>
				<span className="temp--detail pull-right text-right col-md-6 col-sm-8 col-xs-8">
					<b>Max: {temp_max}°</b>
					<span>Min: {temp_min}°</span>
				</span>
			</div>
			<div className="details">
				<ul className="row">
					{_.map(forecast, (time, id) => {
						let { hour, temp, weather } = time;

						return <Time 
							preview={preview}
							hour={hour}
							temp={temp}
							weather={weather}
							index={id}
							key={id}
						/>;
					})}
				</ul>
			</div>
		</li>
	);
};

Day.propTypes = {
	forecast: arrayOf(
		shape({
			hour: string.isRequired,
			temp: number.isRequired,
			weather: arrayOf(
				shape({
					description: string.isRequired,
					icon: string,
					id: number,
					main: string
				})
			)
		})
	),
	date: string
}.isRequired

export default Day;