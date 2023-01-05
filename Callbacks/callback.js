// Synchronous programming
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favorite color?");
console.log(a + " is " + b + " years old and his favorite color is " + c);

// Asynchronous programming 
setTimeout(function(){
    console.log("Hey I am Rohit.");
},  4000)

// Callbacks
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
    console.log("Script loaded Successfully " + src);
    }
    document.body.appendChild(script);
    callback(null, src);

    script.onerror = function () {
        console.log("Error loading script: " + src);
        callback(new Error("Src got some erro"));
    }
}

function hello(error, src) {
    if(error){
        console.log(error);
        return;
    }
    alert("Hello" + src);
}

function goodmorning(error, src) {
    alert("Good Morning" + src);
}

loadScript("https://cdn.jsdelivrees.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello);
