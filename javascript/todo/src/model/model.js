import { createProject } from "./projects";

const Model = () => {
    const projects = [];

    // getter
    const getProjects = () => projects;

    // addProject
    const addProject = (name) => {
        let newProject = {
            id: projects.length === 0 ? 1 : projects.length + 1,
            name: name,
            todos: []
        };

        projects.push(newProject);
    };

    // deleteProject
    const deleteProject = (id) => {
        projects = projects.filter(p => p.id !== id);
    };

    // updateProject
    // TODO

    return {
        getProjects,
        addProject,
        deleteProject
    };
};

export { Model };