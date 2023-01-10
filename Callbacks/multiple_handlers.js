let p1 = new Promise((resoleve, reject)=>{
    console.log("Hey i am  resolved");
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