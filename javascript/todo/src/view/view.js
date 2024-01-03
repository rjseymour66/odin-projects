import { createHeader } from "./header";
import { createProjectsSidebar } from "./project-sidebar";
import { createMain } from "./main";
import { createFooter } from "./footer";
import { createTodoModal, createProjectModal } from "./modals";

const createView = () => {

    const header = createHeader();
    const sidebar = createProjectsSidebar();
    const main = createMain();
    const footer = createFooter();
    const todoModal = createTodoModal();
    const projectModal = createProjectModal();

    // open modal by type
    const RegisterOpenModal = (modalType) => {
        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.querySelector(`#${modalType}-modal`);
            const button = document.querySelector(`.add-${modalType}`);


            button.addEventListener('click', () => {
                modal.showModal();
            });
        });
    };

    // close modal by type
    const RegisterCloseModal = (modalType) => {
        document.addEventListener('DOMContentLoaded', () => {
            const todoModal = document.querySelector(`#${modalType}-modal`);
            const closeTodoModal = document.querySelector(`#close-${modalType}-modal`);

            closeTodoModal.addEventListener('click', () => {
                todoModal.close();
            });
        });
    };

    const initListeners = () => {
        RegisterOpenModal('todo');
        RegisterCloseModal('todo');
        RegisterOpenModal('project');
        RegisterCloseModal('project');
    };

    const initView = () => {
        const contentDiv = document.querySelector('#content');
        contentDiv.appendChild(header);
        contentDiv.appendChild(sidebar);
        contentDiv.appendChild(main);
        contentDiv.appendChild(footer);
        contentDiv.appendChild(todoModal);
        contentDiv.appendChild(projectModal);
    };

    initView();
    initListeners();
};

export { createView };