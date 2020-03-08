import { createReducer } from '@reduxjs/toolkit';

import { initialState, adapter } from './states';
import { fetchAllTodos, createTodo } from './actions';

export const reducer = createReducer(initialState, builder =>
    builder
        .addCase(fetchAllTodos.pending, state => ({ ...state, isFetching: true }))
        .addCase(fetchAllTodos.fulfilled, (state, action) => {
            const { page } = action.payload;
            return adapter.setAll(
                {
                    ...state,
                    isFetching: false
                },
                page.entries
            );
        })
        .addCase(fetchAllTodos.rejected, state => ({ ...state, isFetching: false }))
        .addCase(createTodo.pending, state => ({ ...state, isFetching: true }))
        .addCase(createTodo.fulfilled, (state, action) => {
            const { todo } = action.payload;
            return adapter.addOne(
                {
                    ...state,
                    isFetching: false
                },
                todo
            )
        })
        .addCase(createTodo.rejected, state => ({ ...state, isFetching: false }))
);
