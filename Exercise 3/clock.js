setInterval(function(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    console.log(h,m,s);

let currentTime ="Time -" + h + ":" + m + ":" + s;
document.getElementById("clock").innerHTML = currentTime;

}, 1000)


