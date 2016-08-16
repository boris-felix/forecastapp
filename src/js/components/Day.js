import React, { PropTypes } from 'react';
const { shape, arrayOf, string, number } = PropTypes;

import { map } from 'lodash';
import Moment from 'moment';
import Time from './Time';

const isToday = (day) => {
	return Moment().format('dddd') === day.format('dddd');
};

const TimeList = (forecast) => {
	if (forecast.length > 0) {
		return map(forecast, (time, id) => {
			let { hour, temp, weather } = time;

			return <Time 
				hour={hour}
				temp={temp}
				weather={weather}
				index={id}
				key={id}
			/>;
		});
	}
};

const getTempMinMax = (forecast) => {
	if (forecast.length > 0) {
		let { temp_max, temp_min } = forecast[0];
		return {
			temp_max,
			temp_min
		}
	}

	return {
		temp_max: '',
		temp_min: ''
	}
};

const Day = ({ forecast, date }) => {
	let day = Moment(date, 'YYYY-MM-DD');
	let dayLabel = day.format('dddd');
	let todayLabel = isToday(day) ? 'Today' : '';
	let { temp_max, temp_min } = getTempMinMax(forecast);
	let dayClassName = [
		'day',
		todayLabel.toLowerCase()
	].join(' ');

	return (
		<li className={dayClassName}>
			<div className="header">
				<span className="day--detail pull-left col-md-6 col-sm-4 col-xs-4">
					<b className="day--label">{dayLabel}</b>
					<span className="today--label">{todayLabel}</span>
				</span>
				<span className="temp--detail pull-right text-right col-md-6 col-sm-8 col-xs-8">
					<b className="max--temp">Max: {temp_max}°</b>
					<span className="min--temp">Min: {temp_min}°</span>
				</span>
			</div>
			<div className="details">
				<ul className="row">
					{TimeList(forecast)}
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