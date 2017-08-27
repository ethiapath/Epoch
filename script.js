
/*<<<<<<< HEAD

>>>>>>> cc5768c672b233e31e3fc5bf1a8055b5a3c77125*/

function showTimeSinceUinx(wraper) {
    var time = { 
        seconds: Date.now() / 1000,
        minutes: this.seconds / 60000,
        days: this.minutes / 1440,
        years: this.days / 365
    };

    for (var unit in time) {
        var ele = $('<div id=#timeLabel></div>');
        var iner = $('<div></div>');
        iner.addClass(unit);
        iner.text(time[unit]);
        iner.appendTo(unit);
        ele.appendTo( wraper );
    }

}


$(document).ready(function() {
//	var timer = document.getElementById("clock").innerHTML = "some time";

    //$("#clock").text(Date.now());

    showTimeSinceUinx($("#clock"));
});

