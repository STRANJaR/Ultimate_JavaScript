let a =()=>{ return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(444);
    }, 2000);
})
}

// IIFE FUNCTION (Immidiatliy invocade function expression) -->  (async function) then call ();
(async()=>{

    let b = await a();
    console.log(b);

    let c = await a();
    console.log(c);

    let d = await a();
    console.log(d);

})();

