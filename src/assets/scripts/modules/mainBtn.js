$('.js-main-btn').on('click', function(e){
    e.preventDefault();

    $('.js-reg-form').fadeIn(500);
    $('.main__title-cost').css('color', '#00d065');
    $('.js-main-btn').fadeOut(200);
    return false;
})