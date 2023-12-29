import { Controller } from "./controller/controller.js";
import { View } from "./view/view.js";
import { Model } from "./model/model";

import { createTodo } from "./model/todo.js";
import { createProject } from "./model/projects.js";

// why does this work?
const app = Controller(Model, View);





// const proj = createProject('First project');

// const a = createTodo(
//     'Todo A',
//     'Testing project API',
//     '20 Dec, 2025',
//     'important'
// );

// const b = createTodo(
//     'Todo B',
//     'Testing project API',
//     '21 Dec, 2025',
//     'normal'
// );

// const c = createTodo(
//     'Todo C',
//     'Testing project API',
//     '22 Dec, 2025',
//     'backlog'
// );

// const d = createTodo(
//     'Todo D',
//     'Testing project API',
//     '23 Dec, 2025',
//     'backlog'
// );

// const logTodoTitle = todos => {
//     todos.forEach(t => {
//         console.log(`${t.id}: ${t.todo.getTitle()}`);
//         // console.log('---');
//     });
// };

// proj.addTodo(a);
// proj.addTodo(b);
// proj.addTodo(c);
// proj.addTodo(d);
// logTodoTitle(proj.getTodos());

// const backlog = proj.getAllofPriorityType('normal');
// logTodoTitle(backlog);



///////////////////////////////////////////////
// Accordian
// https://www.w3schools.com/howto/howto_js_accordion.asp

// document.addEventListener('DOMContentLoaded', () => {
//     const accordians = document.querySelectorAll('.task-collapsed');

//     accordians.forEach(acc => {
//         acc.addEventListener('click', () => {
//             acc.classList.toggle('active');

//             const panel = acc.parentElement
//                 // .nextElementSibling
//                 .nextElementSibling;

//             panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
//         });
//     });
// });

// const accordians = document.querySelectorAll('.task-collapsed');

// accordians.forEach(acc => {
//     acc.addEventListener('click', () => {
//         acc.classList.toggle('active');

//         const panel = acc.parentElement
//             // .nextElementSibling
//             .nextElementSibling;

//         panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
//     });
// });



///////////////////////////////////////////////
// Modal

const todoModal = document.querySelector('#todo-modal');
const projectModal = document.querySelector('#project-modal');


document.addEventListener('DOMContentLoaded', () => {
    // const todoModal = document.querySelector('#task-modal');
    const closeTodoModal = document.querySelector('#close-todo-modal');

    closeTodoModal.addEventListener('click', () => {
        taskModal.close();
    });


});

todoModal.showModal();
projectModal.showModal();

// const taskModal = document.querySelector('#task-modal');
// const closeTaskModal = document.querySelector('#close-task-modal');

// const projectModal = document.querySelector('#project-modal');
// const closeProjectModal = document.querySelector('#close-project-modal');

// const addTodo = document.querySelector(".submit-todo");
// const submitModal = document.querySelector(".submit-modal-form");

// // taskModal.showModal();
// // projectModal.showModal();

// closeTaskModal.addEventListener('click', () => {
//     taskModal.close();
// });

// closeProjectModal.addEventListener('click', () => {
//     projectModal.close();
// });