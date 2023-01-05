 let promise = new Promise(function(resolve, reject){
    alert("Hello");
    resolve(33);
 })

 console.log("Hello One");

 setTimeout (() => {
    alert("Hello Two in 2 seconds")
 }, 3000);

 console.log("My name is" + "Hello Three");
 console.log(promise);