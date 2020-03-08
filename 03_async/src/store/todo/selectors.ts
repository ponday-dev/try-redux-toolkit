import { createSelector } from '@reduxjs/toolkit';

import { featureKey, TodoState, adapter } from './states';

const featureStateSelector = (state: { [featureKey]: TodoState }) => state[featureKey];

const { selectAll }  = adapter.getSelectors();

export const todosSelector = createSelector(featureStateSelector, selectAll);
