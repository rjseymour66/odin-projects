import cocktails from './data/cocktails.json';
import starters from './data/starters.json';
import main from './data/main.json';
import desserts from './data/desserts.json';

let createMenuSectionList = (menuList) => {
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

let createCocktailSection = () => {

    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add('cocktails');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = 'cocktails';

    // create cocktail list
    let ul = createMenuSectionList(cocktails);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createStarterSection = () => {

    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add('cocktails');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = 'cocktails';

    // create cocktail list
    let ul = createMenuSectionList(starters);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createMainSection = () => {

    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add('cocktails');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = 'cocktails';

    // create cocktail list
    let ul = createMenuSectionList(main);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createDessertSection = () => {

    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add('cocktails');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = 'cocktails';

    // create cocktail list
    let ul = createMenuSectionList(desserts);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createMenuMain = () => {
    let main = document.createElement('menu');
    main.classList.add('menu');

    let cocktailSection = createCocktailSection();
    let starterSection = createStarterSection();
    let mainSection = createMainSection();
    let dessertSection = createDessertSection();

    main.appendChild(cocktailSection);
    main.appendChild(starterSection);
    main.appendChild(mainSection);
    main.appendChild(dessertSection);

    return main;
};

export { createMenuMain };