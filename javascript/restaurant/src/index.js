import { createHeader } from './header';
import { createFooter } from './footer';
import { createHomeMain } from './home';
import { createAbout } from './about';

import { createMenuMain } from './menu';

const header = createHeader();
const homeMain = createHomeMain();
const menuMain = createMenuMain();
const aboutMain = createAbout();
const footer = createFooter();


// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('#content');

    // add the header that displays home by default
    content.appendChild(header);
    content.appendChild(homeMain);
    content.appendChild(footer);

    // set up event listeners on buttons
    const navButtons = document.querySelectorAll('button');
    navButtons.forEach(button => {
        button.addEventListener('click', e => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            switch (e.target.textContent) {
                case 'Home':
                    renderPage(homeMain);
                    break;
                case 'Menu':
                    renderPage(menuMain);
                    break;
                case 'About':
                    renderPage(aboutMain);
                    break;
                default:
                    break;
            }
        });
    });
});

let clearUI = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

const renderPage = (contentMain) => {
    clearUI(content);
    content.appendChild(header);
    content.appendChild(contentMain);
    content.appendChild(footer);
};