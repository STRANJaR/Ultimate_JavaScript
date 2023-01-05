setInterval(function(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    
    let am_pm = "AM";

    if(hrs > 12){
        hrs = hrs - 12;
        am_pm = "PM"
    }
    if(min < 10){
        min = "0" + min;

    }
    if(sec < 10){
        sec = "0" + sec;

    }


let currentTime = hrs + ":" + min + ":" + sec + " " + am_pm;
document.querySelector("#clock").innerHTML = currentTime;

}, 1000)


