var emailInput = document.querySelector('.js-email-input'),
    passwordInput = document.querySelector('.js-password-input');

emailInput.addEventListener('blur', function(){
    if(emailInput.value.length > 0 ){
        emailInput.classList.add('form__input-area--up')
    } else {
        emailInput.classList.remove('form__input-area--up')
    }
});

passwordInput.addEventListener('blur', function(){
    if(passwordInput.value.length > 0 ){
        passwordInput.classList.add('form__input-area--up')
    } else {
        passwordInput.classList.remove('form__input-area--up')
    }
});