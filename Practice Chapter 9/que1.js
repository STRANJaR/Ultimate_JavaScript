const pro = new Promise((resolve,reject)=>{
    setTimeout(() => {
        alert("Hello World !");
    
    }, 4000);
})
pro.then((value)=>{
    console.log(value);
})
pro.catch((value)=>{
    console.log(value);
})
