var second = 0;
var minute = 0;
var hour = 0;
var appendSecond = document.getElementById("second");
var appendMinute = document.getElementById("minute");
var appendHour = document.getElementById("hour");
var buttonStart = document.getElementById("stopwatch-btn-start");
var buttonStop = document.getElementById("stopwatch-btn-stop");
var buttonReset = document.getElementById("stopwatch-btn-reset");
var interval = null;  
var timerRunning = false; 

buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);
buttonReset.addEventListener('click', reset);

function startTimer(){
    second++;
    if(second < 60){
        appendSecond.innerHTML = pad(second);
    }
    if (second == 60){
        minute++;
        second = 0;
        appendSecond.innerHTML = pad(second);
        appendMinute.innerHTML = pad(minute);
    }
    if(minute < 60){
        appendMinute.innerHTML = pad(minute);
    }
    if (minute == 60){
        hour++;
        minute = 0;
        appendMinute.innerHTML = pad(minute);
        appendHour.innerHTML = pad(hour);
    }
}

function start(){
    if (!timerRunning) { 
        timerRunning = true; 
        interval = setInterval(startTimer, 1000);
    }
}

function stop() {
    clearInterval(interval);
    interval = null;
    timerRunning = false; 
}

function reset() {
    clearInterval(interval);
    interval = null;
    timerRunning = false; 
    appendSecond.innerHTML = "00";
    appendMinute.innerHTML = "00";
    appendHour.innerHTML = "00";
}

function pad(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}
