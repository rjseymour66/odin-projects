const View = () => {

    const root = document.querySelector('#root');
    const ul = document.createElement('ul');
    root.appendChild(ul);

    const displayTodos = (data) => {
        for (let d of data) {
            const li = document.createElement('li');
            li.textContent = d.task;

            const span = document.createElement('span');
            span.textContent = d.id;

            li.prepend(span);

            ul.appendChild(li);
        }
    };

    return {
        displayTodos
    };
};

export { View };