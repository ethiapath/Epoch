
/*<<<<<<< HEAD

>>>>>>> cc5768c672b233e31e3fc5bf1a8055b5a3c77125*/

function listAllInObj(obj, wraper) {

    console.log("listed");
    var ele = $('<ul id=timeLabel></ul>');
    for (var unit in obj) {
        var iner = $('<li style="list-style-type:none"></li>');
        iner.addClass(unit);
        iner.text(unit + ": " + obj[unit]);
        iner.appendTo(ele);
    }
    ele.appendTo( wraper );

}


$(document).ready(function() {
//  var timer = document.getElementById("clock").innerHTML = "some time";

    //$("#clock").text(Date.now());
    /*
    1000 miliseconds in a second: x/1000
    60 seconds in a minute x/60000
    60 minutes in an hour x/360000
    24 hours in a day x/86400000
    365 days in a year x/31536000000
            var time = { 
            seconds: Date.now() / 1000,
            minutes: Date.now() / (60 * 1000),
            hours: Date.now() / (60 * 60 * 1000),
            days: Date.now() / 86400000,
            years: Date.now() / 31536000000
        }; 
    */

    
    setInterval(function() {
        $("#clock").html("");
        listAllInObj({ 
            miliseconds: Date.now(),
            seconds: Date.now() / 1000,
            minutes: Date.now() / (60 * 1000),
            hours: Date.now() / (60 * 60 * 1000),
            days: Date.now() / 86400000,
            years: Date.now() / 31536000000
        }, $("#clock"));
    },5000);
});

