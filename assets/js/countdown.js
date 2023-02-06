var competitionDate = new Date("Mar 19, 2023 08:00:15").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = competitionDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#countdown").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s");

    if (distance < 0) {
        clearInterval(x);
        $("#countdown").hide();
    }
}, 1000);
