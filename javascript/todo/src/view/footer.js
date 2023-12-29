const footerIcons = ['github', 'linkedin', 'facebook'];

const createIconListItem = (iconType) => {
    const li = document.createElement('li');

    const createImageIcon = () => {
        const img = document.createElement('img');
        img.alt = iconType;
        img.src = `./assets/${iconType}.svg`;

        return img;
    };

    li.appendChild(createImageIcon());

    return li;
};

const createIconList = (icons) => {

    const iconList = document.createElement('ul');
    iconList.classList.add('icon-list');

    for (let i of icons) {
        iconList.appendChild(createIconListItem(i));
    }

    return iconList;
};

const createFooter = () => {
    const container = document.createElement('footer');
    container.classList.add('footer');

    container.append(createIconList(footerIcons));

    return container;
};

export { createFooter };