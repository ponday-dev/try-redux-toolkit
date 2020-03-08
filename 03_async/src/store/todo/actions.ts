import { createAsyncThunk } from '@reduxjs/toolkit';
import { featureKey } from './states';
import axios from 'axios';
import { Todo, TodoCreateDto } from '../../models';

export const fetchAllTodos = createAsyncThunk(
    `${featureKey}/fetchAll`,
    async () => {
        const todos = await axios.get<{ entries: Todo[] }>('/todos').then(res => res.data);
        return { page: todos };
    }
);

export const createTodo = createAsyncThunk(
    `${featureKey}/createTodo`,
    async (args: { todo: TodoCreateDto }) => {
        const result = await axios.post<Todo>('/todos', args.todo).then(res => res.data);
        return { todo: result };
    }
)
