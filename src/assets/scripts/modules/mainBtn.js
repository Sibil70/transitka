$(".js-main-btn").on("click", function(e) {
    e.preventDefault();
    var formWrap = document.querySelector(".main__form"),
        formHeight = formWrap.firstElementChild.getBoundingClientRect().height,
        gradient = "radial-gradient(circle at 49% 0, #004779, #00223d)";

    if (window.innerWidth >= 480) {
        $(".js-reg-form")
            .css("height", formHeight)
            .css("overflow", "initial");
        $(".main__title-cost").css("color", "#00d065");
        $(".js-main-btn").fadeOut(200);

        return false;
    } else {
        $(".js-reg-form")
            .css("height", formHeight)
            .css("overflow", "initial");
        $(".main__title-cost").css("color", "#00d065");
        $(".js-main-btn").fadeOut(200);
        $(".wrapper").css("background-image", gradient);
        console.log($(".wrapper"));
        return false;
    }
});
