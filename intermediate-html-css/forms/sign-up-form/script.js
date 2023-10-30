// if password and confirm do not match, add error class

const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm');


passwordInput.addEventListener('input', e => {
    const passwordValue = passwordInput.textContent;
    const confirmValue = confirmInput.textContent;

    console.log(passwordValue);

    if (passwordValue !== confirmValue) {
        passwordInput.classList.add('error');
        confirmInput.classList.add('error');
    }
});





