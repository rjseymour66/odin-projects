import '../styles.css';
import { RegisterCloseModal } from './event-listeners';

const createFormLabel = (text, forVal) => {
    const label = document.createElement('label');
    label.setAttribute('for', forVal);
    label.textContent = text;

    return label;
};

const createFormInput = (type, nameIdVal) => {
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', nameIdVal);
    input.setAttribute('id', nameIdVal);
    input.setAttribute('required', '');

    return input;
};

const createFormTextArea = (nameIdVal, rowCount) => {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('name', nameIdVal);
    textArea.setAttribute('id', nameIdVal);
    textArea.setAttribute('required', '');
    textArea.setAttribute('rows', rowCount.toString());

    return textArea;
};

const createFormDateInput = (type, nameId, min) => {
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', type);
    dateInput.setAttribute('name', nameId);
    dateInput.setAttribute('id', nameId);
    dateInput.setAttribute('required', '');
    dateInput.setAttribute('min', min.toString());

    return dateInput;
};

const createFormRow = (labelEl, inputEl, rowType) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add(`${rowType}-row`);

    rowDiv.appendChild(labelEl);
    rowDiv.appendChild(inputEl);

    return rowDiv;
};

const createRadioInput = (idValValue, nameVal) => {
    const radioButton = document.createElement('radio');
    radioButton.classList.add('radio');
    radioButton.setAttribute('type', 'radio');
    radioButton.setAttribute('id', idValValue);
    radioButton.setAttribute('value', idValValue);
    radioButton.setAttribute('name', nameVal);

    return radioButton;
};

const createFieldSet = (legendTitle) => {
    // const radioBtnTypes = ['important', 'normal', 'backlog'];

    const fieldSet = document.createElement('fieldset');
    fieldSet.classList.add('priority-section');

    const legend = document.createElement('legend');
    legend.classList.add('legend');
    legend.textContent = legendTitle;

    fieldSet.appendChild(legend);

    // important
    const impLabel = createFormLabel('important', 'important');
    const impRadioInput = createRadioInput('important', 'priority');
    const impRadRow = createFormRow(impLabel, impRadioInput, 'radio');

    fieldSet.appendChild(impRadRow);

    // normal
    const normalLabel = createFormLabel('normal', 'normal');
    const normalRadioInput = createRadioInput('normal', 'priority');
    const normalRadRow = createFormRow(normalLabel, normalRadioInput, 'radio');
    normalRadRow.classList.add('radio-row');


    fieldSet.appendChild(normalRadRow);

    // backlog
    const backlogLabel = createFormLabel('backlog', 'backlog');
    const backlogRadioInput = createRadioInput('backlog', 'priority');
    const backlogRadRow = createFormRow(backlogLabel, backlogRadioInput, 'radio');

    fieldSet.appendChild(backlogRadRow);

    return fieldSet;
};

const createSubmitButton = (text) => {
    const button = document.createElement('button');
    button.classList.add('submit-modal-form');
    button.setAttribute('type', 'submit');
    button.textContent = text;

    return button;
};

const createPostForm = () => {
    const form = document.createElement('form');
    form.classList.add('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');

    return form;
};

const createTodoModalForm = () => {

    // create title
    const titleLabel = createFormLabel('title', 'title');
    const titleInput = createFormInput('text', 'title');
    const titleRow = createFormRow(titleLabel, titleInput, 'form');

    // create description
    const descLabel = createFormLabel('description', 'description');
    const descTextArea = createFormTextArea('description', 5);
    const descRow = createFormRow(descLabel, descTextArea, 'form');

    // create due date
    const dateLabel = createFormLabel('due date', 'due-date');
    const dateInput = createFormDateInput('date', 'due-date', 1);
    const dateRow = createFormRow(dateLabel, dateInput, 'form');

    // create fieldSet
    const fieldSet = createFieldSet('priority');

    // create submit button
    const submitBtn = createSubmitButton('add todo');

    const todoModalForm = createPostForm();
    todoModalForm.appendChild(titleRow);
    todoModalForm.appendChild(descRow);
    todoModalForm.appendChild(dateRow);
    todoModalForm.appendChild(fieldSet);

    todoModalForm.appendChild(submitBtn);

    return todoModalForm;
};

const createProjectModalForm = () => {

    // create title
    const titleLabel = createFormLabel('title', 'title');
    const titleInput = createFormInput('text', 'title');
    const titleRow = createFormRow(titleLabel, titleInput, 'form');

    // create submit button
    const submitBtn = createSubmitButton('add project');

    const projectModalForm = createPostForm();
    projectModalForm.appendChild(titleRow);
    projectModalForm.appendChild(submitBtn);

    return projectModalForm;
};


const createModal = (modalType) => {
    const dialog = document.createElement('dialog');
    dialog.classList.add(`${modalType}-modal`);
    dialog.setAttribute('id', `${modalType}-modal`);

    const heading = document.createElement('h2');
    heading.textContent = `Add a ${modalType}`;

    const createCloseButton = () => {
        const button = document.createElement('button');
        button.classList.add('modal-close');
        button.setAttribute('type', 'button');
        button.setAttribute('id', `close-${modalType}-modal`);
        button.textContent = 'Close';

        return button;
    };

    // const RegisterCloseModal = (modalType) => {
    //     document.addEventListener('DOMContentLoaded', () => {
    //         const todoModal = document.querySelector(`#${modalType}-modal`);
    //         const closeTodoModal = document.querySelector(`#close-${modalType}-modal`);

    //         closeTodoModal.addEventListener('click', () => {
    //             todoModal.close();
    //         });
    //     });
    // };

    RegisterCloseModal(modalType);

    dialog.appendChild(heading);
    dialog.appendChild(createCloseButton());

    return dialog;
};

const createTodoModal = () => {
    const dialog = createModal('todo');
    // RegisterCloseModal('todo');
    dialog.appendChild(createTodoModalForm());

    return dialog;
};

const createProjectModal = () => {
    const dialog = createModal('project');
    // RegisterCloseModal('project');
    dialog.appendChild(createProjectModalForm());

    return dialog;
};

export { createTodoModal, createProjectModal };