// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds");
//         resolve(44);
//     }, 2000);
// })
// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
            
//             resolve("Promise 2");
//         }, 200);
//     })
//     return p2;
// }).then((value)=>{
//     console.log("We are done !");
// })


// LoadScript Function 
 
const LoadScript = (src) =>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        script.onload = () =>{
            resolve("Script has been loaded Successfully");
        }
        script.onerror = () =>{
            reject (0);
        }
    })
}

let pp1 = LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
pp1.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log("Sorry! We are working on it...");
})

