import { createHeader } from './header';
import { createFooter } from './footer';
import { createHomeMain } from './home';

import { createMenuMain } from './menu';



const content = document.querySelector('#content');

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    clearUI(content);
    const header = createHeader();
    // const homeMain = createHomeMain();
    const menuMain = createMenuMain();
    const footer = createFooter();

    content.appendChild(header);
    content.appendChild(menuMain);
    content.appendChild(footer);
});

let clearUI = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};