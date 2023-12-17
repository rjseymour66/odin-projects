const Controller = (model, view) => {

    const updateData = () => {
        const data = model.getTodos();
        view.displayTodos(data);
    };

    updateData();

    return {
        updateData
    };
};

export { Controller };