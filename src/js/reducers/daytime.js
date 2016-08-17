import Moment from 'moment';
import { chain } from 'lodash';
import {
    CURRENT
} from '../constants/actionTypes';

const mapDayTime = (time) => {
	if(time >= 0 && time <= 8) {
		return 'early-morning';
	} else if (time >= 8 && time <= 12) {
		return 'morning';
	} else if (time >= 12 && time <= 18) {
		return 'afternoon';
	} else if (time >= 18 && time <= 24) {
		return 'evening'; 
	}
};

const Reducer = (state = {}, action) => {
	let { type, time } = action;

	switch (type) {
		case 'DAY_TIME':
			return mapDayTime(time);
	}

	return state;
};

export default Reducer;