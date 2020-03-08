import { Todo } from '../../models';

export const featureKey = 'todos';

export type TodoState = {
    entries: Todo[],
}

export const initialState: TodoState = {
    entries: []
}
