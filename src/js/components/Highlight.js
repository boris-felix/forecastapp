import React from 'react';

const Highlight = ({ current, city }) => {
	let now = current[0];
	let { temp, weather } = now;
	let { description } = weather[0];

	return (
		<div className="highlight text-center col-md-12">
			<div className="city"><b>{city}</b></div>
			<div className="description">{description}</div>
			<div className="temperature">{temp}°</div>
		</div>
	);
}

export default Highlight;