$(".contents > button").click(() => {
    $("body").animate({
        scrollTop: $("#bio").offset().top
    }, 1000);
});

$("#bio > button").click(() => {
    $("body").animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
});

if ($(window).width() > 1000) {
    $(".contents").on({
        mouseenter: () => {
            $(".first-view").css("filter", "saturate(1)");
        },
        mouseleave: () => {
            $(".first-view").css("filter", "saturate(0)");
        }
    });
}


$(window).scroll(() => {
    if ($(window).scrollTop() >= $("#bio").offset().top-100) {
        $(".text-wrap > h2").css({transform: "translateX(0)", opacity: "1"});
        $(".text-wrap > p").css({transform: "translateY(0)", opacity: "1"});
    } 
    if ($(window).scrollTop() >= $("#bio").offset().top+300 || $(window).scrollTop() < $("#bio").offset().top-500) {
        $(".text-wrap > h2").css({transform: "translateX(500px)", opacity: "0"});
        $(".text-wrap > p").css({transform: "translateY(200px)", opacity: "0"});
    }
    if ($(window).scrollTop() >= $("#skills").offset().top-100) {
        $(".ps").css("width", "70%");
        $(".ct").css("width", "75%");
        $(".cw").css("width", "80%");
        $(".gp").css("width", "50%");
        $(".wd").css("width", "55%");
        $(".vc").css("width", "70%");
    } else {
        $(".ps, .ct, .cw, .gp, .wd, .vc").css("width", "0");
    }
});