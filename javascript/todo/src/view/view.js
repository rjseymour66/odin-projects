import { createHeader } from "./header";
import { createProjectsSidebar } from "./project-sidebar";
import { createMain } from "./main";
import { createFooter } from "./footer";
import { createModal } from "./modals";

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

    // create/append add task modal
    contentDiv.appendChild(createModal('task'));


    // create/append add project modal
};

const View = () => {
    initView();

    // const displayTodos = (data) => {

    // };

};

export { View };