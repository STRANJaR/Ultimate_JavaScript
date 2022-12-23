// Que 1: Use logical operator to find age of a person lie b/w 10 and 20.
let age = 21;

if(age>=10 && age<=20){
    console.log("Your age lie b/t 10 And 20.");

}
else{
    console.log("You are not lie b/t 10 and 20.");
}

// Que 2: Demonstrate the usage of switch case statement.

let age2 = 22;

switch(age2){
    case age2<18: console.log("Tullu");
    break;

    case age2>20: console.log("console.tullu");
    break;
    
    default:
        console.log("This is not valid !");
}

// Que 3: Write a program to find a whether number is divisible by 2 and 3.

let num = 30;

if(num%2 == 0 && num%3 == 0){
    console.log(num + " is divisible by 2 and 3 ");
}
else{
    console.log("Number is not divisible by 2 and 3 ");
}
// Que 4: Write a program to find a whether number is divisible by 2 or 3.
let num2 = 11;

if(num2%2 == 0 || num2%3 == 0){
    console.log(num2 + " is divisible by 2 or 3 ");
}
else{
    console.log(num2 + " Number is not divisible by 2 or 3 ");
}

// Que 5: Write a program to "You can drive" or "You cannot drive " based on user age 

let ageOF = 50;

if(ageOF>18){
    console.log("You can drive !");

}
else{
    console.log("You cannot drive !")
}

