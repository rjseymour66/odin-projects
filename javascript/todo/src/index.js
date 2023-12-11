import { createTodo } from "./todo";
import { createProject } from "./projects";
import todos from './sample-data.json';


let proj = createProject();

for (let t of todos) {
    proj.addTodo(t);
}


const todoController = () => {
    let projects = [];

    const addProject = newProject => {
        projects.push(newProject);
    };

    let activeProject = projects[0];

    const switchProject = index => {
        activeProject = projects[index];
    };

    const getProjects = () => {
        projects.forEach(p => p.getName());
    };
};