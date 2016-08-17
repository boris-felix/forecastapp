import React from 'react';
import { expect } from 'chai';
import CurrentReducer from '../current';
import ForecastReducer from '../forecast';
import DaytimeReducer from '../daytime';
import {
    CURRENT,
    DAY_TIME
} from '../../constants/actionTypes';

describe('Current reducer', () => {
    it('should handle CURRENT action types', () => {
        expect(CurrentReducer(undefined, {
            type: 'CURRENT',
            values: [
                {
                    temp: 1,
                    weather: [
                        {
                            description: 'foo'
                        }
                    ]
                },
                {
                    temp: 2,
                    weather: [
                        {
                            description: 'bar'
                        }
                    ]
                }
            ]
        })).to.eql({
            temp: 1,
            description: 'foo'
        });
    });
});

describe('Forecast reducer', () => {
    it('should handle FORECAST action types', () => {
        expect(ForecastReducer(undefined, {
            type: 'FORECAST',
            values: [
                {
                    value: 'foo'
                },
                {
                    value: 'bar'
                }
            ]
        })).to.eql({
            list: [
                {
                    value: 'foo'
                },
                {
                    value: 'bar'
                }
            ]
        });
    });
});

describe('Daytime reducer', () => {
    it('should return early-morning if between 0 and 8', () => {
        [0,1,2,3,4,5,6,7,8].forEach((time) => {
            expect(DaytimeReducer(undefined, {
                type: DAY_TIME,
                time: time
            })).to.eql('early-morning');
        });

        expect(DaytimeReducer(undefined, {
            type: DAY_TIME,
            time: 9
        })).to.not.eql('early-morning');
    });

    it('should return morning if between 8 and 12', () => {
        [9,10,11,12].forEach((time) => {
            expect(DaytimeReducer(undefined, {
                type: DAY_TIME,
                time: time
            })).to.eql('morning');
        });

        expect(DaytimeReducer(undefined, {
            type: DAY_TIME,
            time: 13
        })).to.not.eql('morning');
    });

    it('should return afternoon if between 12 and 18', () => {
        [13,14,15,16,17,18].forEach((time) => {
            expect(DaytimeReducer(undefined, {
                type: DAY_TIME,
                time: time
            })).to.eql('afternoon');
        });

        expect(DaytimeReducer(undefined, {
            type: DAY_TIME,
            time: 19
        })).to.not.eql('afternoon');
    });

    it('should return evening if between 18 and 24', () => {
        [19,20,21,22,23,24].forEach((time) => {
            expect(DaytimeReducer(undefined, {
                type: DAY_TIME,
                time: time
            })).to.eql('evening');
        });

        expect(DaytimeReducer(undefined, {
            type: DAY_TIME,
            time: 0
        })).to.not.eql('evening');
    });
});