// Question 1: 

// Button 1 
let btn = document.getElementById("btn");
let x = function(e){
    alert("Hello, Good Morning");
}
btn.addEventListener('click',x);

// Button 2 
let btn2 = document.getElementById("btn2");
let y = function(e){
    alert("Hello, Good Night");
}
btn2.addEventListener('click', y);

// Question 2: 
let google = document.getElementById("google");
let a = function(e){
    window.location = "https://www.google.com";

}
google.addEventListener('click', a);

let fb = document.getElementById("facebook");
let b = function(e){
    window.location = "https://www.facebook.com";
}
fb.addEventListener('click', b);

let cod = document.getElementById("cod");
let c = function(e){
    window.location = "https://www.codewithharry.com";

}
cod.addEventListener('click', c);


// Question 3:
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb");
}, 300);