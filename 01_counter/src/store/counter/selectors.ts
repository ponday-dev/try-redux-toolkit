import { featureKey, CounterState } from './states';
import { createSelector } from '@reduxjs/toolkit';

const featureStateSelector = (state: { [featureKey]: CounterState }) => state[featureKey];

export const counterSelector = createSelector(featureStateSelector, state => state);
