async function weather(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("9 deg");
        }, 4000);
    })

    let bangloreWether = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("20 deg");

        }, 6000);
    })
    console.log("Fatching Delhi Weather Please wait...");
    let delhi = await delhiWeather;
    console.log("Fatched Delhi Weather: " + delhi);

    console.log("Fatching Banglore Weather Please wait...");
    let banglore = await bangloreWether;
    console.log("Fatched Banglore Weather: " + banglore);

    return [delhi, banglore];
}

const cherry = async() =>{
    console.log("Hey i am cherry and im  waiting...");
}
const main1 = async() =>{

    let x = await weather();
    let y = await cherry();
   
}

main1();