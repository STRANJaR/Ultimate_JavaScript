// setTimeout 


let a = setTimeout(function(){
    alert("Hello This is function");
}, 4000)

let b = prompt("Do you want to run settieout? ");
if('n' == b){
    clearTimeout(a);
  
}

const sum = (a , b) =>{
    console.log("Yes I am Running>>> " + (a+b));
    
}
setTimeout(sum, 2000, 2, 5);

// setInterval 

 setInterval(function(){
    alert("setInterval Running:::");

}, 5000)



