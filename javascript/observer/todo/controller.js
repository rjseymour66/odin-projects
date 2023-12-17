// import { View } from "../view/view";

// const appView = View();

const Controller = (appModel, appView) => {
    const model = appModel;
    const view = appView;

    const onTodoListChanged = (todos) => {
        view.displayTodos(todos);
    };
    // onTodoListChanged();

    const handleAddTodo = (todoText) => {
        model.addTodo(todoText);
    };

    const handleEditTodo = (id, todoText) => {
        model.editTodo(id, todoText);
    };

    const handleDeleteTodo = (id) => {
        model.deleteTodo(id);
    };

    const handleToggleTodo = (id) => {
        model.toggleTodo(id);
    };

    view.bindAddTodo(handleAddTodo);
    view.bindDeleteTodo(handleDeleteTodo);
    view.bindToggleTodo(handleToggleTodo);

    return {
        model, view
    };
};

export { Controller };