const createProject = (projectName) => {
    let name = projectName;
    let todos = [];

    const getName = () => name;
    const getTodo = (index) => todos[index];
    const addTodo = todo => todos.push(todo);
    const deleteTodo = (index) => {
        todos.pop(index);
    };

    // maybe rm later
    const listTodos = () => {
        todos.forEach(t => console.log(t.title));
    };

    const sortTodos = () => {
        let sortedTodos = todos
            .sort(function (a, b) {
                return a.priority > b.priority ? 1 : -1;
            });
        todos = sortedTodos;
    };

    return {
        getName,
        getTodo,
        addTodo,
        deleteTodo,
        listTodos,
        sortTodos
    };
};

export { createProject };