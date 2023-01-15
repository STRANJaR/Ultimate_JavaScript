async function finalResult(){
    let pro = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("error");
        }, 3000);
    })

    let result = await pro;
    

}

 try{

    finalResult();
}
catch(error){
    console.log("Error");
}