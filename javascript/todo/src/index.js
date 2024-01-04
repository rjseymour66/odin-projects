import { Controller } from "./controller/controller.js";
import { createView } from "./view/view.js";
import { Model } from "./model/model";

import { createTodo } from "./model/todo.js";
import { createProject } from "./model/projects.js";

// why does this work?
const app = Controller(Model, createView);





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