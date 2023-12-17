const View = () => {

    // Create an element with an optional CSS class
    const createElement = (tag, className) => {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    };

    // Retrieve an element from the DOM
    const getElement = (selector) => {
        const element = document.querySelector(selector);
        return element;
    };

    const app = getElement('#root');

    // The title of the app
    const title = createElement('h1');
    title.textContent = 'Todos';

    // The form, with a [type="text"] input, and a submit button
    const form = createElement('form');

    const input = createElement('input');
    input.type = 'text';
    input.placeholder = 'Add todo';
    input.name = 'todo';

    const submitButton = createElement('button');
    submitButton.textContent = 'Submit';

    // The visual representation of the todo list
    const todoList = createElement('ul', 'todo-list');

    // Append the input and submit button to the form
    form.append(input, submitButton);

    // Append the title, form, and todo list to the app
    app.append(title, form, todoList);

    const displayTodos = (todos) => {
        // Delete all nodes
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }

        // Show default message
        if (todos.length === 0) {
            const p = createElement('p');
            p.textContent = 'Nothing to do! Add a task?';
            todoList.append(p);
        } else {
            // Create todo item nodes for each todo in state
            todos.forEach(todo => {
                const li = createElement('li');
                li.id = todo.id;

                // Each todo item will have a checkbox you can toggle
                const checkbox = createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;

                // The todo item text will be in a contenteditable span
                const span = createElement('span');
                span.contentEditable = true;
                span.classList.add('editable');

                // If the todo is complete, it will have a strikethrough
                if (todo.complete) {
                    const strike = createElement('s');
                    strike.textContent = todo.text;
                    span.append(strike);
                } else {
                    // Otherwise just display the text
                    span.textContent = todo.text;
                }

                // The todos will also have a delete button
                const deleteButton = createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                li.append(checkbox, span, deleteButton);

                // Append nodes to the todo list
                todoList.append(li);
            });
        }
    };

    const getInputText = () => input.value;
    const resetInput = () => {
        input.value = "";
    };

    // on submit, run the handler on any input text in input field
    // and reset the input
    const bindAddTodo = (handlerFunc) => {
        form.addEventListener('submit', event => {
            event.preventDefault();

            if (getInputText()) {
                handlerFunc(getInputText());
                resetInput();
            }
        });
    };

    // on click, if the list item has a delete class, get the target id
    // and run the handlerFunc with that id
    const bindDeleteTodo = (handlerFunc) => {
        todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id);

                handlerFunc(id);
            }
        });
    };

    // on change event, if the target is a checkbox, get the target id and 
    // run the handlerFunc on it.
    const bindToggleTodo = (handlerFunc) => {
        todoList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id);

                handlerFunc(id);
            }
        });

    };

    return {
        displayTodos,
        bindAddTodo,
        bindDeleteTodo,
        bindToggleTodo
    };
};
export { View };