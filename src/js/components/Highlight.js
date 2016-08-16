import React, { PropTypes } from 'react';
const { string, object } = PropTypes;

import { kebabCase } from 'lodash';

const Highlight = ({ temp, description, city }) => {
	let weatherIcon = [
		'icon meteocons',
		kebabCase(description)
	].join(' ');

	return (
		<div className="highlight text-center col-md-12 col-sm-12 col-xs-12">
			<div className="city"><b>{city}</b></div>
			<div className="description">
				<span>{description}</span>
				<i title={description} className={weatherIcon}></i>
			</div>
			<div className="temperature">{temp}°</div>
		</div>
	);
}

Highlight.propTypes = {
	current: object,
	city: string.isRequired
}.isRequired

export default Highlight;