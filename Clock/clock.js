function updateClock() {
    $('.clock').show();
    var currentTime = new Date();
    var hours       = currentTime.getUTCHours();
    var minutes     = currentTime.getUTCHours();
    var seconds     = currentTime.getUTCHours();

    var degree_seconds = -90 + (seconds * 6);
    var degree_minutes = -90 + (minutes * (360 / 6));
    var degree_hour    = -90 + (hours * (360 / 12));

    $('.hour').css('-webkit-transform', 'rotate(' + degree_hour + ' deg)');
    $('.minute').css('-webkit-transform', 'rotate(' + degree_minutes + ' deg)');
    $('.second').css('-webkit-transform', 'rotate(' + degree_seconds + ' deg)');
}

setInterval(updateClock, 1000);
updateClock();










