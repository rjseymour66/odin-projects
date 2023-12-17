const Model = () => {
    let todos = [
        {
            id: 1,
            task: "Walk the dog",
        },
        {
            id: 2,
            task: "Vacuum the rug",
        },
    ];

    const getTodos = () => todos;

    const addTodo = (text) => {
        let todo = {
            id: todos.length + 1,
            task: text,
        };

        todos.push(todo);
    };

    return {
        getTodos,
        addTodo
    };
};

export { Model };