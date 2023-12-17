export const Model = () => {

    let todos = [
        { id: 1, text: 'Run a marathon', complete: false },
        { id: 2, text: 'Plant a garden', complete: false },
    ];

    const bindTodoListChanged = (callbackFunc) => {
        let onTodoListChanged = callbackFunc;
    };

    // get todos
    const getTodos = () => todos;

    // add todo to list
    const addTodo = (todoText) => {
        const todo = {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,
        };

        todos.push(todo);
    };

    // find todo with id, update the text
    const editTodo = (id, updatedText) => {
        todos = todos.map((todo) =>
            todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo,
        );
    };

    // delete todo
    const deleteTodo = (id) => {
        todos = todos.filter(todo => todo.id !== id);
    };

    // mark todo as complete
    const toggleTodo = (id) => {
        todos = todos.map((todo) =>
            todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo,
        );
    };

    return {
        getTodos,
        addTodo,
        editTodo,
        deleteTodo,
        toggleTodo
    };
};