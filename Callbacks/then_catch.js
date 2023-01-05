  let p1 = new Promise((resolve, reject) =>{
    console.log("Promise is pending");
    setTimeout(() => {
      console.log("I am a promise and i am Resolved");
      resolve(true);
      
    }, 4000)
  })

  let p2 = new Promise((resolve, reject) =>{
    console.log("Promise is pending");
    setTimeout(() => {
      console.log("I am a promise and i am Rejected");
      reject(new Error("I am an error"));
    }, 4000)
  })

// To get the value

p1.then((value)=>{
    console.log(value);
})
// or 
// p1.then(alert);

// To catch the errors
// p2.catch((value)=>{
//     console.log(value);
// })

p2.then((value) =>{
    console.log(value);
},(error)=>{
    console.log(error)
})