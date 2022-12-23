let num = prompt("Enter a number: ");
let tol = 1;
num = Number.parseInt(num);


for(let i=0; i<num; i++){
     tol = tol * num;
    console.log(tol);34
}

// For loop 

let inputNumber = prompt('Please enter an integer');
let total = 1;

for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);

}

console.log(inputNumber + '! = ' + total);

