
    var popup = document.getElementById('popup')
    var closePopup = document.querySelectorAll('.popup__selector');

    $(closePopup).click(function(event) {
        $(popup).fadeOut(500);
       });

