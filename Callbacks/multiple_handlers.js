let p1 = new Promise((resoleve, reject)=>{
    alert("Hey i am not resolved");
   setTimeout(() => {
    resoleve(1);
   }, 3000);
})

p1.then(()=>{
    console.log("Success !");
})

p1.then(()=>{
    console.log("Hurray");
})