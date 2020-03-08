export type Todo = {
    id: number,
    title: string,
}

export type TodoCreateDto = Omit<Todo, 'id'>;
