$(window).on('load', () => {
    setTimeout(() => {
        $('#loading-screen').fadeOut();
        $('#loading-image').delay(350).fadeOut('slow');
        $('body').delay(350).css({overflowY: 'visible'});
        $('body').scrollLeft(0);
    }, 1000);
});
