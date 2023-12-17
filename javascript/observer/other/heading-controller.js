const HeadingController = (model, view) => {
    const model = model;
    const view = view;

    const handleClick = (e) => {
        e.stopPropagation();
    };

    const getModelHeading = () => model.heading;

    const clickHandlerHeadingText = (target) => {
        model.heading = 'World';
        target.textContent = getModelHeading();
    };
};