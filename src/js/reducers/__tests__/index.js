import React from 'react';
import { expect } from 'chai';
import CurrentReducer from '../current';
import ForecastReducer from '../forecast';
import {
    CURRENT
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