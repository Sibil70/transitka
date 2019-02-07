$('.js-main-btn').on('click', function(e){
    e.preventDefault();
    var formWrap = document.querySelector('.main__form'),
        formHeight = formWrap.firstElementChild.getBoundingClientRect().height;
    $('.js-reg-form').css('height', formHeight).css('overflow', 'initial');
    $('.main__title-cost').css('color', '#00d065');
    $('.js-main-btn').fadeOut(200);
    return false;
})