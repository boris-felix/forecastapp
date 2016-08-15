import React from 'react';
import { kebabCase } from 'lodash';

const Time = ({ hour, temp, weather }) => {
	let { description } = weather[0];
	let weatherIcon = [
		'icon meteocons',
		kebabCase(description)
	].join(' ');

	return (
		<li className="time col-md-1">
			<div>{ hour }</div>
			<div className="weather text">
				<i title={description} className={weatherIcon}></i>
			</div>
			<div>{ temp }</div>
		</li>
	);
}

export default Time;