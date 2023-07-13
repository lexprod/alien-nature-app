// <!--script to make navbar responsive-->

$(function () {
    let viewport = window.matchMedia("(min-width: 576px)");
    if (viewport.matches) {
        $("#responsiveNavbar").removeClass("fixed-bottom");
    }
    $(window).on('resize', function () {
        if ($(window).width() >= 576) {
            $("#responsiveNavbar").removeClass("fixed-bottom");
        } else if ($(window).width() < 576) {
            $("#responsiveNavbar").addClass("fixed-bottom");
        }
    });
})
