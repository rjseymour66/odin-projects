import todos from '../data/sample-data.json';

// addtodo button
const createAddTodoButton = () => {
    const button = document.createElement('button');
    button.classList.add('add-todo');
    button.setAttribute('type', 'button');
    button.textContent = 'add todo \u002b';

    return button;
};

// todo nav > priority list
const createPriorityList = () => {

    const categories = ['all', 'important', 'normal', 'backlog'];

    const todoNavDiv = document.createElement('div');
    todoNavDiv.classList.add('todo-nav');

    const ul = document.createElement('ul');
    ul.classList.add('priority-list');

    // append ul to div
    todoNavDiv.appendChild(ul);

    // create
    const createPriorityListItem = (categoryName) => {
        const li = document.createElement('li');
        li.classList.add('priority-category');
        li.classList.add(`${categoryName}-category`);

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('priority-btn');
        button.textContent = categoryName;

        li.appendChild(button);

        return li;
    };

    for (let cat of categories) {
        ul.append(createPriorityListItem(cat));
    }

    return todoNavDiv;
};

const createTodoListItem = (todo) => {
    // create todo list item
    const liDiv = document.createElement('div');
    liDiv.classList.add('list-item');

    // create listFlex div
    const listFlexDiv = document.createElement('div');
    listFlexDiv.classList.add('list-flex');
    liDiv.appendChild(listFlexDiv);

    // button
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('task-collapsed');
    button.textContent = todo.title;
    listFlexDiv.appendChild(button);

    // date span
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('due-date');
    dateSpan.textContent = todo.dueDate;
    listFlexDiv.appendChild(dateSpan);

    const createImgIcon = (iconType) => {
        const img = document.createElement('img');
        img.classList.add('task-icon');
        img.classList.add(`${iconType}-icon`);
        img.src = `./assets/${iconType}.svg`;
        img.alt = `${iconType} todo`;
        img.setAttribute('id', `${iconType}-icon`);
        return img;
    };
    // task icon span
    listFlexDiv.appendChild(createImgIcon('edit'));
    // delete icon span
    listFlexDiv.appendChild(createImgIcon('delete'));

    // taskExpandedDiv
    const expandedDiv = document.createElement('div');
    expandedDiv.classList.add('task-expanded');
    liDiv.appendChild(expandedDiv);

    // p with text content
    const p = document.createElement('p');
    p.textContent = todo.description;
    expandedDiv.appendChild(p);

    return liDiv;
};

// todo list div
const createTodoList = (todos) => {
    const listDiv = document.createElement('div');
    listDiv.classList.add('todo-list');

    for (const t of todos) {
        listDiv.appendChild(createTodoListItem(t));
    }

    return listDiv;
};



const createMain = () => {
    const mainEl = document.createElement('main');
    mainEl.classList.add('todo-content');

    // create/append button
    mainEl.appendChild(createAddTodoButton());
    mainEl.appendChild(createPriorityList());

    // create/append li
    mainEl.appendChild(createTodoList(todos));

    return mainEl;
};


export { createMain };