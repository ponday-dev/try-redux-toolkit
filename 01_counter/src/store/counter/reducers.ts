import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './actions';
import { initialState } from './states';

export const reducer = createReducer(initialState, builder =>
    builder
        .addCase(increment, (state, _action) => state + 1)
        .addCase(decrement, (state, _action) => state - 1)
);
