import './styles.css';

const createSiteNav = () => {
    let nav = document.createElement('nav');
    nav.classList.add('main-header__nav');

    let ul = document.createElement('ul');
    ul.classList.add('site-nav');
    // create a tags
    let homeLink = document.createElement('button');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.classList.add('active');

    let menuLink = document.createElement('button');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';

    let aboutLink = document.createElement('button');
    aboutLink.href = '#';
    aboutLink.textContent = 'About';

    // create lis
    let homeLi = document.createElement('li');
    let menuLi = document.createElement('li');
    let aboutLi = document.createElement('li');

    homeLi.appendChild(homeLink);
    menuLi.appendChild(menuLink);
    aboutLi.appendChild(aboutLink);

    ul.appendChild(homeLi);
    ul.appendChild(menuLi);
    ul.appendChild(aboutLi);

    nav.appendChild(ul);

    return nav;
};


const createHeader = () => {
    let nav = createSiteNav();

    let header = document.createElement('header');
    header.classList.add('main-header');

    let h1 = document.createElement('h1');
    h1.classList.add('main-header__heading');
    h1.textContent = 'Restaurant Name';

    header.appendChild(h1);
    header.appendChild(nav);

    return header;
};

export { createHeader };