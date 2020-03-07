import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as counter from './counter';

const reducer = combineReducers({
    [counter.featureKey]: counter.reducer
})

export const store = configureStore({ reducer });
