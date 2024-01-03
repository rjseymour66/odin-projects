const createProjectsSidebarHeading = () => {
    const h2 = document.createElement('h2');
    h2.classList.add('projects-heading');
    h2.textContent = 'Projects';

    return h2;
};

const createProjectsList = () => {
    const ul = document.createElement('ul');
    ul.classList.add('project-list');

    return ul;
};

// helper func
const addProjectListItem = (ulElement, projName) => {
    // create li
    const li = document.createElement('li');
    li.classList.add('project-item');

    // create button
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('project-btn');
    button.textContent = projName;

    // append button to li
    li.appendChild(button);

    ulElement.appendChild(li);
};

const createAddProjectButton = () => {
    const button = document.createElement('button');
    button.classList.add('add-project');
    button.textContent = 'Add project \u002b';
    button.setAttribute('type', 'button');

    return button;
};

const createProjectsSidebar = () => {
    const asideEl = document.createElement('aside');
    asideEl.classList.add('projects-sidebar');

    // create heading
    const heading = createProjectsSidebarHeading();
    // append heading to asideEl
    asideEl.appendChild(heading);

    // create project list
    const ul = createProjectsList();
    // append project list to asideEl
    asideEl.appendChild(ul);

    // add list items to list
    addProjectListItem(ul, 'Project 1');
    addProjectListItem(ul, 'Project 2');
    addProjectListItem(ul, 'Project 3');

    // create button
    const addProjectButton = createAddProjectButton();

    // append button to asideEl
    asideEl.appendChild(addProjectButton);

    return asideEl;
};

export { createProjectsSidebar };