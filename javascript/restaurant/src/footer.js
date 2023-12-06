let createFooter = () => {
    let footer = document.createElement('footer');
    footer.classList.add('footer');

    let location = document.createElement('p');
    location.classList.add('location');
    location.textContent = '100 Main Street, Boston MA';

    let phone = document.createElement('p');
    phone.classList.add('phone');
    phone.textContent = '617-123-4321';

    let email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'info@restaurant.com';

    footer.appendChild(location);
    footer.appendChild(phone);
    footer.appendChild(email);

    return footer;
};

export { createFooter };