export const todos = [
    { id: 1, title: 'sample todo 01' },
    { id: 2, title: 'sample todo 02' },
    { id: 3, title: 'sample todo 03' },
    { id: 4, title: 'sample todo 04' },
    { id: 5, title: 'sample todo 05' },
];

let nextId = todos.length + 1;

export default {
    get: () => [200, { entries: todos }],

    post: ({ data }) => {
        const todo = {
            id: nextId++,
            title: data.title
        };
        todos.push(todo);

        return [201, todo];
    }
}
