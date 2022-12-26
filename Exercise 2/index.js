let element = ['SNAKE','WATER','GUN'];
let comp = 0;
let player = 0;
let name = prompt("Enter Your Name: ");

for(let i=1; i<=10; i++){

    player = prompt("CHOOSE ONE OF THIS", "SNAKE WATER GUN");
    comp = element[Math.floor(Math.random() * (element.length - 0) + 0)];

if((comp == 'SNAKE' && player == 'SNAKE') || (comp == 'WATER' && player == 'WATER') || (comp == 'GUN' && player == 'GUN')){
    console.log("'TIE'");
   
}

else if((comp=='SNAKE' && player == 'WATER') || (comp=='WATER' && player == 'GUN') || (comp == 'GUN' && player == 'SNAKE')){
    console.log("'COMPUTER'S WON'");
    comp++;
    

}

else if((comp =='SNAKE' && player == 'GUN') || (comp=='WATER' && player=='SNAKE') || (comp=='GUN' && player == 'WATER')){
console.log("'YOU WON'");
player++;
}

else{
    alert("ENTER THE VALID VALUE >>");
}
}

if(comp < player){
    alert("cnf" + player);
    // console.log(`FINAL RESULT: CONGRATULATION'S ${name} YOU WON THE MATCH !`);
}
else if (player < comp){
    alert("lose" + comp);
    // console.log(`FINAL RESULT: ${name} YOU LOSE THE GAME !`);
}
else{
    console.log("FINAL RESULT: MATCH TIE !");
}

