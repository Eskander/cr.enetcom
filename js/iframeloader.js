var loadCounter = 0;

var loaded = function () {
    loadCounter += 1;

    if (loadCounter === 2) {
        $("iframe").attr("height", "300px");
        $('html, body').stop().animate({
            scrollTop: ($('iframe').offset().top - 150)
        }, 1250, 'easeInOutExpo');
    }
}