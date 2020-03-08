import { EntityState, createEntityAdapter } from '@reduxjs/toolkit';
import { Todo } from '../../models';

export const featureKey = 'todos';

export type TodoState = EntityState<Todo> & {
    isFetching: boolean,
    selectedId: Todo['id'] | null
}

export const adapter = createEntityAdapter<Todo>();

export const initialState = adapter.getInitialState({
    isFetching: false,
    selectedId: null
});
