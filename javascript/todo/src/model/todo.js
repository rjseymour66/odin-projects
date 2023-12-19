const createTodo = (task, desc, date, prior) => {
    let title = task;
    let description = desc;
    let dueDate = date;
    let priority = prior;

    // edit

    // getters
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    // setters
    const setTitle = (text) => { title = text; };
    const setDescription = (text) => { description = text; };
    const setDueDate = (text) => { dueDate = text; };
    const setPriority = (text) => { priority = text; };

    return {
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
    };
};

export { createTodo };