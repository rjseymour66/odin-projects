const createHeader = () => {
    const headerEl = document.createElement('header');
    headerEl.classList.add('page-header');

    const h1 = document.createElement('h1');
    h1.classList.add('header-heading');
    h1.textContent = 'Todos';

    headerEl.appendChild(h1);

    return headerEl;
};

export { createHeader };