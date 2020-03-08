import { createReducer } from '@reduxjs/toolkit';

import { initialState } from './states';
import { createTodo } from './actions';

let nextId = 1;

export const reducer = createReducer(initialState, builder =>
    builder
        .addCase(createTodo, (state, action) => {
            return {
                entries: [...state.entries, { ...action.payload, id: nextId++ }]
            };
        })
);
