import { createAction } from '@reduxjs/toolkit';
import { featureKey } from './states';

export const increment = createAction(`${featureKey}/increment`);

export const decrement = createAction(`${featureKey}/decrement`);
