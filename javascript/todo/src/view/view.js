import { createHeader } from "./header";
import { createProjectsSidebar } from "./project-sidebar";
import { createMain } from "./main";
import { createFooter } from "./footer";

const initView = () => {
    const contentDiv = document.querySelector('#content');

    // create/append header
    contentDiv.appendChild(createHeader());

    // create/append sidebar
    contentDiv.appendChild(createProjectsSidebar());

    // create/append main
    contentDiv.appendChild(createMain());

    // create/append footer
    contentDiv.appendChild(createFooter());
};

const View = () => {
    initView();

    // const displayTodos = (data) => {

    // };

};

export { View };