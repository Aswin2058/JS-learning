window.addEventListener("load", calculateTime);

function calculateTime(){
    var date = new Date();

    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var nmp = hour>= 12? "PM" : "AM";
    var days = ["SUN", "MON", "TUE", "WED", "THRS", "FRI", "SAT"];
    var today = days[day];

    hour = hour % 12;
    // hour = hour ? 12 : '12';
    hour = hour < 10? '0' + hour: hour;
    minute = minute < 10? '0' + minute : minute;

    document.querySelector(".date").textContent = today;
    document.querySelector(".hour").textContent = hour;
    document.querySelector(".minute").textContent = minute;
    document.querySelector(".mnm").textContent = nmp;

    setTimeout(calculateTime, 200); 
}