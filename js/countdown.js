var competitionDate = new Date("Feb 23, 2020 08:00:15").getTime();
var registrationDate = new Date("Jan 20, 2020 20:00:15").getTime();

// Countdown 1
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = competitionDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").style.visibility = "hidden";
    }
}, 1000);

// Countdown 2
var y = setInterval(function () {

    var now = new Date().getTime();
    var distance = registrationDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("registration").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("registration").style.visibility = "hidden";
    }
}, 1000);