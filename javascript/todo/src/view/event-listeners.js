
// open modal by type
const RegisterOpenModal = (modalType) => {

    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.querySelector(`#${modalType}-modal`);
        const button = document.querySelector(`.add-${modalType}`);


        button.addEventListener('click', () => {
            modal.showModal();
        });
    });
};



// close modal by type
const RegisterCloseModal = (modalType) => {
    document.addEventListener('DOMContentLoaded', () => {
        const todoModal = document.querySelector(`#${modalType}-modal`);
        const closeTodoModal = document.querySelector(`#close-${modalType}-modal`);

        closeTodoModal.addEventListener('click', () => {
            todoModal.close();
        });
    });
};

export { RegisterOpenModal, RegisterCloseModal };