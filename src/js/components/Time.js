import React from 'react';

const Time = ({ hour, temp }) => {
	return (
		<li>
			<div>{ hour }</div>
			<div>{ temp }</div>
		</li>
	);
}

export default Time;