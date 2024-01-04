import { createView } from "../view/view";

const projects = ['Project 1', 'Project 2', 'Project 3'];

const Controller = (Model, View) => {
    let model = Model;
    let view = View;


    const populateProjectList = (projectList) => {

        // console.log(createView.createProjectsSidebar(projectList));
    };

    populateProjectList(projects);

    const handleAddTodo = () => {
        // view.
    };


    model();
    view();
};

export { Controller };