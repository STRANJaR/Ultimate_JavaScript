// Que 1: Crate an array of numbers and take input from the user to add numbers to this array. 
const arr = [2,3,4,5];
let pro = Number.parseInt(prompt("Enter a Number: "));
arr.push(pro);
console.log(arr);


// Que 2: Keep adding numbers to the array in Que 1 until 0 is added to the array. 
let arr5 = [23, 56, 33, 11];
let valPro;
do{
   valPro =  Number.parseInt(prompt("Enter The value: "));
    arr5.push(valPro);
}while(valPro != 0);
console.log(arr5);

// Que 3: Filter for numbers divisible by 10 from a given array 
let  filTer = [20, 40, 45, 70, 52];
let final = filTer.filter((value)=>{
    return value%10 == 0;

})
console.log(final + " Are divisible by 10");

// Que 4: Create an array of square of given numbers. 
let sqr = [2, 4, 6, 7, 3];

sqr.forEach((element)=>{
    console.log(element * element);
})

// Que 5: Use reduce to calculate factorial of a given number from an array n natural numbers(n being the number whose factorial needs to be calculated). 

let fact = [1, 2, 3, 4, 5];
let n = fact.reduce((x1, x2)=>{
    return x1 * x2; 

})
console.log(n); 