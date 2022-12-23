// Que: 1 
let marks = {
    Rohit: "98",
    Harry: "89",
    Rishabh: "76",
    Ritika: "50"
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// Que: 2
let Number = 19;

let i;
while(i != Number){
    i = prompt("Enter the Value ");
    console.log("Try again")

}
console.log("Congratulation! You guees the correct number ");

// Que: 3 

const mean = (a, b, c, d) =>{
    return (a + b + c + d)/4;

}
console.log(mean(4, 5, 4, 6));
