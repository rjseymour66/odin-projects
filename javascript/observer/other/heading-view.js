const HeadingView = (controller) => {
    const controller = controller;
    const heading = document.querySelector('#heading');
    heading.textContent = controller.modelHeading;
    heading.addEventListener('click', controller);
};

export { HeadingView };