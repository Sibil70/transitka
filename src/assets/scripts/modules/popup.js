$(function() {

    var deposit = $("#popup");
    // console.log(deposit);
    // deposit.hide();

    // window.allowpop = true;
    // document.addEventListener("mouseout", function(e) {
    //     if (e.clientY < 0 && window.allowpop) {
    //         window.allowpop = false;
    //         deposit.fadeIn(400);
    //         setTimeout(function() {
    //             window.allowpop = true;
    //         }, 5 * 30 * 1000);
    //     }
    // });

    $(".js-close-popup").on("click", function(e) {
        e.preventDefault();

        deposit.fadeOut(200);
        return false;
    });
});