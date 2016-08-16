import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import ForecastList from '../ForecastList';
import HighLight from '../HighLight';
import Day from '../Day';
import Time from '../Time';
import Moment from 'moment';

chai.use(chaiEnzyme());

describe('<ForecastList />', () => {
	const props = {
		list: [
			{
				foo: 'bar'
			},
			{
				foo: 'bar'
			},
			{
				foo: 'bar'
			}
		]	
	};
	const wrapper = shallow(<ForecastList {...props} />);

	it('should renders three Day component', () => {
		expect(wrapper.find(Day)).to.have.lengthOf(3);
	});
});

describe('<HighLight />', () => {
	const props = {
		city: 'Biarritz',
		temp: 30, 
		description: 'Sunny'
	};
	const wrapper = shallow(<HighLight {...props} />);

	it('should show the city name', () => {
		expect(wrapper.find('.city').first()).to.have.text('Biarritz');
	});

	it('should show the temperature', () => {
		expect(wrapper.find('.temperature').first()).to.have.text('30°');
	});

	it('should show the weather description', () => {
		expect(wrapper.find('.description').first()).to.have.text('Sunny');
	});

	it('should show a weather icon related to the description', () => {
		const anotherProps = {
			city: 'Biarritz',
			temp: 30, 
			description: 'Light rain'
		};
		const anotherWrapper = shallow(<HighLight {...anotherProps} />);

		expect(wrapper.find('.description .icon').first()).to.have.className('sunny');
		expect(anotherWrapper.find('.description .icon').first()).to.have.className('light-rain');
	});
});

describe('<Day />', () => {
	const props = {
		date: '2016-01-01',
		forecast: [
			{
				hour: '00:00',
				temp: 30,
				temp_max: 36,
				temp_min: 12,
				weather: [
					{
						description: 'foo',
						icon: 'bar',
						id: 123,
						main: 'fuu'
					}
				]
			},
			{
				hour: '01:00',
				temp: 31,
				temp_max: 34,
				temp_min: 17,
				weather: [
					{
						description: 'foo2',
						icon: 'bar2',
						id: 124,
						main: 'fuu2'
					}
				]
			}
		]
	};
	const wrapper = shallow(<Day {...props} />);

	it('should show if the showed day is today', () => {
		expect(wrapper.find('.header .day--detail .today--label')).to.not.have.text('Today');

		const propsToday = {
			date: Moment().format('YYYY-MM-DD'),
			forecast: []
		};
		const wrapperToday = shallow(<Day {...propsToday} />);
		expect(wrapperToday.find('.header .day--detail .today--label')).to.have.text('Today');
	});

	it('should show the max temp of the day', () => {
		expect(wrapper.find('.header .temp--detail .max--temp')).to.have.text('Max: 36°');
	});

	it('should show the min temp of the day', () => {
		expect(wrapper.find('.header .temp--detail .min--temp')).to.have.text('Min: 12°');
	});

	it('should renders multiples Time component', () => {
		expect(wrapper.find(Time)).to.have.lengthOf(2);
	});
});

