import React from 'react';

const Day = ({ hour, temp }) => {
	return (
		<li>
			<div>{ hour }</div>
			<div>{ temp }</div>
		</li>
	);
}

export default Day;