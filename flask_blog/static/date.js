'use strict';

var temp_date = new Date();
var day = temp_date.getDate();
var month = temp_date.getMonth() + 1;
var year = temp_date.getFullYear();
console.log(year);
if (day < 10) {
    day = "0" + day;
};
if (month <10) {
    month = "0" + month;
};
document.getElementById('data-time').innerHTML = day + "." + month + "." + year;

function clock_time()
    {
        var current_datetime = new Date();
        var hours = current_datetime.getHours();
        var minutes = current_datetime.getMinutes();
        var seconds = current_datetime.getSeconds();

        return hours + ":" + minutes + ":" + seconds;
    }
setInterval(function () {
        document.getElementById('clock-time').innerHTML = clock_time();
    }, 1000);
