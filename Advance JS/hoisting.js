// following the lines will run successfully due to JavaScript hoisting.
  console.log(a);


  greet();
function greet(){
    console.log("Good Morning");

}

let a = 5;    // Declaration hoisting to the top but initialization is not 
console.log(a);
