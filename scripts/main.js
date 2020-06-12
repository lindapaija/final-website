$(window).on('load', () => {
    $(".explore").css("display", "none");
    if ($(window).width() < 1000) {
        $(".top-nav").css("display", "none");
        $(".explore").css({top: "0"});
    }
    $('body').delay(350).css({overflowY: 'visible'});
    $('body').scrollLeft(0);
});

