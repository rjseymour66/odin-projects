///////////////////////////////////////////////
// Modal

const taskModal = document.querySelector('#task-modal');
const closeTaskModal = document.querySelector('#close-task-modal');

const projectModal = document.querySelector('#project-modal');
const closeProjectModal = document.querySelector('#close-project-modal');

const addTodo = document.querySelector(".submit-todo");
const submitModal = document.querySelector(".submit-modal-form");

// taskModal.showModal();
// projectModal.showModal();

closeTaskModal.addEventListener('click', () => {
    taskModal.close();
});

closeProjectModal.addEventListener('click', () => {
    projectModal.close();
});