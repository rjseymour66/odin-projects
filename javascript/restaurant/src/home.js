import './styles.css';

let createHomeMain = () => {
    let main = document.createElement('main');
    main.classList.add('section-content');

    let p = document.createElement('p');
    p.classList.add('home-text');
    p.textContent = 'This restaurant rocks and everyone likes it. A lot. A whole lot. We have fancy food and awesome drinks and these drinks are gonna be awesome.';

    main.appendChild(p);

    return main;
};




export { createHomeMain };