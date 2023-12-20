import { createHeader } from "./header";
import { createProjectsSidebar } from "./project-sidebar";

const initView = () => {
    const contentDiv = document.querySelector('#content');

    // create/append header
    const header = createHeader();
    contentDiv.appendChild(header);

    // create/append sidebar
    const projectSidebar = createProjectsSidebar();
    contentDiv.appendChild(projectSidebar);
};

const View = () => {
    initView();

    // const displayTodos = (data) => {

    // };

};

export { View };