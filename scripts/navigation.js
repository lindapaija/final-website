$(window).on("load", () => {
    if ($(window).width() > 1000) {
        $("#nav-bar").addClass("nav-items").removeClass("side-nav");
        $(".social").css("display", "flex");
        $(".show-icon, .close-icon").css("display", "none");
        $(".nav-logo").css("align-self", "start").css({width:"50%"});
    }
    else {
        $("#nav-bar").addClass("side-nav").removeClass("nav-items");
        $(".social").css("display", "none");
        $(".show-icon").css("display", "inline-block");
        $(".close-icon").css("display", "block");
        $(".nav-logo").css("align-self", "center").css("width", "100%");
    }
});

$(".show-icon").on("click", () => {
    $(".side-nav").css({display: "block", zIndex: "1000"}).animate({width: "18%", opacity: "1"}, 200);
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