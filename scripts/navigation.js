
$(".explore").on("click", () => {
    $(".side-nav").css({display: "block", zIndex: "1000"}).animate({width: "20%", opacity: "1"}, 200);
    if ($(window).width() > 1000) {
        $(".sticky-navbar").css({height: "0", opacity: "0", zIndex: "-1"});
    }
});

$(".close-icon").on("click", () => {
    $(".side-nav").animate({width: "0", opacity: "0"}, 200, () => {
        $(".side-nav").css({display: "none", zIndex: "-1"});
        $(".sticky-navbar").css({height: "80px", transform: "scaleY(1)", opacity: "1", zIndex: "999"});
    })
});