var $arrow = $(".scroll a");
var $off = $("#about").offset().top;


$("#fresh").on("click", function () {
    $("body, html").animate({
        scrollTop: $off
    }, 1200)
})
