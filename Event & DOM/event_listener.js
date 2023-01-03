let x = function(e){
    alert("Hello World !");
}
let y = function(e){
    alert("Hello Rohit");

}
let btn = document.getElementById("btn");
btn.addEventListener('click', x);

btn.addEventListener('click', y);

let a = prompt("What is your favorite number: ");
if(a == '2'){
    btn.removeEventListener('click', x)
}