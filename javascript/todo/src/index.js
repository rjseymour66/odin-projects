import { View } from "./view/view.js";

// View();






///////////////////////////////////////////////
// Accordian
// https://www.w3schools.com/howto/howto_js_accordion.asp

const accordians = document.querySelectorAll('.accordian');

accordians.forEach(acc => {
    acc.addEventListener('click', () => {
        acc.classList.toggle('active');

        const panel = acc.parentElement.nextElementSibling;
        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
    });
});



///////////////////////////////////////////////
// Modal

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const addTodo = document.querySelector(".submit-todo");
const submitModal = document.querySelector(".submit-modal-form");

modal.showModal();

addTodo.addEventListener('click', (e) => {
    modal.showModal();
});





closeModal.addEventListener("click", () => {
    modal.close();
});



// let resetUI = () => {
//     while (tableBody.firstChild) {
//         tableBody.removeChild(tableBody.firstChild);
//     }
// };