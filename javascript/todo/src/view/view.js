import { createHeader } from "./header";
import { createProjectsSidebar } from "./project-sidebar";
import { createMain, createTodoList } from "./main";
import { createFooter } from "./footer";
import { createTodoModal, createProjectModal } from "./modals";

// import todos from '../data/todo-data.json';
import projectList from '../data/project-data.json';


const projects = ['Project 1', 'Project 2', 'Project 3'];

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

// TODO
let resetUI = () => {
    while (mainEl.firstChild) {
        mainEl.removeChild(mainEl.firstChild);
    }
};

const liEventListener = () => {
    const mainEl = document.querySelector('.todo-content');
    const pButtons = document.querySelectorAll('.project-btn');
    pButtons.forEach(button => {
        button.addEventListener('click', e => {
            pButtons.forEach(btn => btn.classList.remove('project-active'));
            e.target.classList.add('project-active');

            // display todos for that project
            console.log(button.dataset.projectIndex);

            // console.log(mainEl);

            const projectIndex = button.dataset.projectIndex;

            mainEl.appendChild(createTodoList(projectList[projectIndex].todos));

        });
    });
};

const createView = () => {

    const header = createHeader();
    const sidebar = createProjectsSidebar(projectList);
    const main = createMain(projectList);
    const footer = createFooter();
    const todoModal = createTodoModal();
    const projectModal = createProjectModal();

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

        liEventListener();
    };

    initView();
    initListeners();

    return {
        createProjectsSidebar
    };
};

export { createView };