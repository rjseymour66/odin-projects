import { View } from "./view/view.js";
import { createTodo } from "./model/todo.js";
import { createProject } from "./model/projects.js";

View();




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