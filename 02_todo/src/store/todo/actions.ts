import { createAction } from '@reduxjs/toolkit';

import { featureKey } from './states';

export const createTodo = createAction(`${featureKey}/create`, (title: string) => {
    return {
        payload: { title }
    }
});
