import './styles.css';

import cocktailsJSON from './data/cocktails.json';
import startersJSON from './data/starters.json';
import mainJSON from './data/main.json';
import dessertsJSON from './data/desserts.json';

let createMenuList = (menuList) => {
    // create the ul
    let ul = document.createElement('ul');
    ul.classList.add('cocktail-list');
    ul.classList.add('menu-list');

    for (let item of menuList) {
        //// create li
        let li = document.createElement('li');
        li.classList.add('list-item');

        //// create p
        let p = document.createElement('p');
        p.classList.add('item-desc');

        //// create item-name span
        let nameSpan = document.createElement('span');

        //// add span.textContent
        nameSpan.textContent = item.name;
        nameSpan.classList.add('item-name');

        //// create item-price span
        let priceSpan = document.createElement('span');
        priceSpan.classList.add('item-price');

        //// add span.textContent
        priceSpan.textContent = item.price;

        //// add p.textContent
        p.textContent = item.description;

        p.prepend(nameSpan);

        // append item-price span to p
        p.appendChild(priceSpan);

        // append p to li
        li.appendChild(p);

        // append li to ul
        ul.appendChild(li);
    }
    return ul;
};

const createMenuSection = (sectionTitle, JSONdata) => {
    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = sectionTitle;

    // create cocktail list
    let ul = createMenuList(JSONdata);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createMenuMain = () => {
    const main = document.createElement('menu');
    main.classList.add('menu');

    const cocktailSection = createMenuSection('cocktails', cocktailsJSON);
    const starterSection = createMenuSection('starters', startersJSON);
    const mainSection = createMenuSection('main', mainJSON);
    const dessertSection = createMenuSection('dessert', dessertsJSON);

    main.appendChild(cocktailSection);
    main.appendChild(starterSection);
    main.appendChild(mainSection);
    main.appendChild(dessertSection);

    return main;
};

export { createMenuMain };