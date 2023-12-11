import './styles.css';

const p1Text = 'Located on the edge of City Square Park in Charlestown – this restaurant is an energetic Italian celebration of reimagined classics. Our beautifully restored grand bar and dining room – which overlooks the park as well as the city skyline – strives to honor our building’s past and its prestigious placement at the gate of this historic Boston neighborhood';

const p2Text = 'Open daily for lunch and dinner, Prima’s hand-crafted menu has been meticulously curated to provide our guests an incredible dining experience at any time of the day.';

const createAbout = () => {

    let main = document.createElement('main');
    main.classList.add('about-main');

    const section = document.createElement('section');

    const p1 = document.createElement('p');
    p1.classList.add('about-para');
    p1.textContent = p1Text;

    const p2 = document.createElement('p');
    p2.classList.add('about-para');
    p2.textContent = p2Text;

    section.appendChild(p1);
    section.appendChild(p2);

    main.appendChild(section);

    return main;
};

export { createAbout };