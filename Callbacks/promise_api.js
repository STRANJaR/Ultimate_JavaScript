let p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("value 1");
    }, 4000);
})

let p2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        // resolve("value 2");
        reject(new Error("Error"));  
    }, 3000);
})

let p3 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
})

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{         ///  individualy print the value. annoying method
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// Promise.all  /// When all promises are compleated then it's execute.

// let promise_all = Promise.all([p1,p2,p3]);
// let promise_all = Promise.allSettled([p1,p2,p3]);
// let promise_all = Promise.race([p1,p2,p3]);
let promise_all = Promise.any([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value);
})