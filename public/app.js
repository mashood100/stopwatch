
var min = 0
var sec = 0
var mili = 0

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var miliHeading = document.getElementById("mili");
var inteval;

function timer(){
    mili++
    miliHeading.innerHTML = mili
    if( mili >= 100){
        sec++
        secHeading.innerHTML = sec
        mili= 0
    }
    else if ( sec >= 60 ){
        min++
        minHeading.innerHTML = min
        sec = 0
    }

}
function start(){
    interval = setInterval(timer,10)
}
function stop (){
    clearInterval(interval)
}

function reset () {
 min  = 00
 sec  = 00
 mili = 00

 minHeading.innerHTML = min
 secHeading.innerHTML =  sec
 miliHeading.innerHTML = mili
 stop()
}

// interval = setInterval(timer,10)

// setTimeout(function(){clearInterval(interval),5000})