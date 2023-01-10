try {
let age = Number.parseInt(prompt("Enter Your Age: "));

if(age>150){
    throw new Error("The age are not probably true.");;
}
 
   

} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("Script are running...");


