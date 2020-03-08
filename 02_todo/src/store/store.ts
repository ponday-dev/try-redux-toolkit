import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as todo from './todo';

const reducer = combineReducers({
    [todo.featureKey]: todo.reducer
});

export const store = configureStore({ reducer });
