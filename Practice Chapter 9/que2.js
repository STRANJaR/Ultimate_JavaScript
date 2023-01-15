async function printHello(){
   
    let pro = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Hello World ! DONE ");
        }, 4000);
    })

    let res = await pro;
    alert(res);
}

printHello();