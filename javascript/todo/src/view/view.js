const createHeader = () => {
    const headerEl = document.createElement('header');
    headerEl.classList.add('page-header');

    const h1 = document.createElement('h1');
    h1.classList.add('header-heading');
    h1.textContent = 'Todos';

    headerEl.appendChild(h1);

    return headerEl;
};

const createDiv = () => {
    const div = document.createElement('div');
    div.classList.add('todo-content');
    return div;
};

const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('form-row');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'input-todo');
    input.setAttribute('id', 'input-todo');

    const button = document.createElement('button');
    button.classList.add('submit-todo');
    button.setAttribute('type', 'submit');
    button.textContent = 'add todo';

    form.appendChild(input);
    form.appendChild(button);

    return form;
};

const createList = () => {
    const ul = document.createElement('ul');
    ul.classList.add('todo-list');

    return ul;
};

const createListItem = (text, index) => {
    // create li
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.setAttribute('data-list-item', index);

    // checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'status');
    checkbox.setAttribute('id', 'status');

    // span
    const span = document.createElement('span');
    span.classList.add('todo-id');
    span.textContent = index;

    // p
    const p = document.createElement('p');
    p.classList.add('todo-text');
    p.textContent = text;

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(p);

    return li;
};

const initView = () => {
    const root = document.querySelector('#content');
    const header = createHeader();
    const div = createDiv();
    const form = createForm();
    const list = createList();
    const li = createListItem('this is a test', 1);

    list.appendChild(li);

    div.appendChild(form);
    div.appendChild(list);

    root.appendChild(header);
    root.appendChild(div);
};

const View = () => {
    initView();

    const displayTodos = (data) => {

    };

};

export { View };