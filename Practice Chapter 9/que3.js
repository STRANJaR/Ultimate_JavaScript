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

// For dowonloading CV 

const cv = function(e){
    window.open('https://github.com/STRANJaR');
}
let btn = document.getElementById("btn");

btn.addEventListener('click', cv);