import { createTodo } from "./todo";

const createProject = (projName) => {
    let name = projName;
    let todos = [];

    // getters and setters
    const getTodos = () => todos;
    const getProjectName = () => name;
    const setProjectName = (newName) => { name = newName; };

    // addTodo
    const addTodo = (todo) => {
        // create projectTodo object
        let newTodo = {
            id: todos.length === 0 ? 1 : todos.length + 1,
            todo: todo
        };
        // push 
        todos.push(newTodo);
    };

    // deleteTodo
    const deleteTodo = (id) => {
        // create a new array that does not include the todo with the 
        // id argument
        todos = todos.filter(todo => todo.id !== id);
    };
    // updateTodo
    const updateTodo = (id, newTodo) => {
        // needs better validation
        // map through todos, if the ids are equal, replace, otherwise leave as is
        todos = todos.map(obj => obj.id === id ? { id: id, todo: newTodo } : obj);
    };

    // get all of a priority type
    const getAllofPriorityType = (priorityType) => {
        // return array of priority
        return todos.filter(obj => obj.todo.getPriority() === priorityType);
    };

    // 

    return {
        getTodos,
        getProjectName,
        setProjectName,
        addTodo,
        deleteTodo,
        updateTodo,
        getAllofPriorityType
    };

};

export { createProject };

// project
//// addTodo
//// deleteTodo
//// updateTodo