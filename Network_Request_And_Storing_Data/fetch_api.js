let p = fetch("https://api.open-meteo.com/v1/forecast?latitude=28.64&longitude=77.22&hourly=temperature_2m");

p.then((responds)=>{
    console.log(responds.status);
    console.log(responds.ok);
    // console.log(responds.text()); 
    console.log(responds.headers); 
    // return responds.text();         // This is show string text format
    
    return responds.json();

}).then((value2)=>{
    console.log(value2);
})