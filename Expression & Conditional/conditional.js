
let age = 19;
switch(age){
    case 18: console.log("You are kid");
    break;


    case 19: console.log("You are Young");
    break;

    default: console.log("enter valid value")
}

// que 3

let num = 9;
if(num%2 == 0 && num%3 == 0){

    console.log("Number divisible by 2 and 3");
}
else{
    console.log("Not divisible by 2 and 3");
}

// que 4

let num2 = 7;
if(num2%2 == 0 || num2%3 == 0){ 

    console.log("Number divisible by 2 or 3");
}
else{
    console.log("Not divisible by 2 or 3");
}

let ageNum = 19;
if(ageNum<18){
    console.log("You can't drive !");

}
else if(ageNum>=18){
    console.log("You can drive !");
}
else{
    console.log("Enter valid age.")
}



