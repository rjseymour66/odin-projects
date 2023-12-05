import { createHeader } from './header';

let header = createHeader();
// console.log(nav);

const content = document.querySelector('#content');

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    content.appendChild(header);
});