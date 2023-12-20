///////////////////////////////////////////////
// Accordian
// https://www.w3schools.com/howto/howto_js_accordion.asp

const accordians = document.querySelectorAll('.task-collapsed');

accordians.forEach(acc => {
    acc.addEventListener('click', () => {
        acc.classList.toggle('active');

        const panel = acc.parentElement
            // .nextElementSibling
            .nextElementSibling;

        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
    });
});