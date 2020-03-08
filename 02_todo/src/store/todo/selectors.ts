import { createSelector } from '@reduxjs/toolkit';

import { featureKey, TodoState } from './states';

const featureStateSelector = (state: { [featureKey]: TodoState }) => state[featureKey];

export const todosSelector = createSelector(featureStateSelector, ({ entries }) => entries);
