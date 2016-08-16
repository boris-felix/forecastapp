import React from 'react';
import { connect } from 'react-redux';
import Highlight from '../components/Highlight';

const HighlightContainer = (props) => <Highlight {...props} />
const a = ({ current }) => {
	const { temp, description } = current;
	return {
		temp,
		description
	}
};

const Container = connect(a)(HighlightContainer);

export default Container;