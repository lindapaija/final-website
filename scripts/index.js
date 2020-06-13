$(window).on('load', () => {
    $('.img-wrapper, .sub-text').css("transform", "translateX(0)");
    $(window).scroll(() => {
        var st = $(window).scrollTop()
        if (st > 300) {
            $('.img-wrapper').css("transform", "translateX(-500px)");
            if ($(window).width() > 1000) $('.sub-text').css("transform", "translateX(500px)");
        }
        else $('.img-wrapper, .sub-text').css("transform", "translateX(0)");
        
        $(".post").each(function (e) {
            if (st >= $(this).offset().top-800) $(this).css({opacity: "1", transform: "translateY(0)"});
            else {
                $(this).css({opacity: "0", transform: "translateY(100px)"});
            }
        });
    })
});

