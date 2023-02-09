let arr = [5 , 7, 9, 2, 00, 67, 13];
/* No Need this 
let a = arr[0];
let a = arr[1]; */

// NEW METHOD (DESTRUCTURING)
let [a , b, c, d, ...rest] = arr;
let [a , , b, ...rest] = arr;

console.log(a,b, rest);

// Another ...
let {a,b} = {a:1 , b:5};
console.log(a,b);


// SPREAD SYNTAX 
let arr1 = [9,5,3];
let obj1 = {...arr1};
console.log(obj1);

function sum (v1, v2, v3){
    return v1 + v2 + v3;
}
console.log(sum(...arr1));


// IN REACT WE USE 

let obj2 = {
    name: "Rohit",
    company: "Code-X",
    Graduation: "BCA",
    Mobile: 9798254920
}
// console.log({name: "John", company: "ABC", ...obj2}); //--> This will not change properties/ keys.

console.log({...obj2, name:"John", company: "ABC"});