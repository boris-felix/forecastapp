import React, { PropTypes } from 'react';
const { shape, arrayOf, string, number } = PropTypes;

import { kebabCase } from 'lodash';
import Moment from 'moment';

const Time = ({ index, hour, temp, weather }) => {
	let { description } = weather[0];
	let time = Moment(hour, 'HH:mm').format('HH:mm');
	let weatherIcon = [
		'icon meteocons',
		kebabCase(description)
	].join(' ');
	let timeClassName = [
		'time col-md-1 col-sm-2 col-xs-2',
		(index > 5 ? 'hidden-xs hidden-sm' : '')
	].join(' ');

	return (
		<li className={timeClassName}>
			<div>{ time }</div>
			<div className="weather text">
				<i title={description} className={weatherIcon}></i>
			</div>
			<div>{ temp }°</div>
		</li>
	);
}

Time.propTypes = {
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
}.isRequired

export default Time;