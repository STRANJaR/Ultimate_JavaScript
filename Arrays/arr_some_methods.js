 let num = [5, 5, 3, 1, 6, 7];
 console.log(num.length);
 delete num[0];
 console.log(num.length);

// Concatination of more than one Array

let num_more = [4, 4, 8, 9, 3, 1];
let newArr = num.concat(num_more);
console.log(newArr); 

// Sort method 
let arr = [555,333, 776, 454, 347, 563];
arr.sort();
console.log(arr);

let compare = (a,b) =>{
    return b - a;

}
arr.sort(compare);
console.log(arr);

let months = ['Dec', 'May', 'Jan', 'Fab', 'Aug', 'Apr'];
months.sort();
console.log(months);

// Reverse - reverse the hole array
arr.reverse();
console.log(arr);

// Splice and Slice  
let num2 = [555,333, 776, 454, 347, 563];
num2.splice(2, 3, 1000, 2000, 300, 400, 500); // (start from , delete , add values )
console.log(num2);
let delVal = num2.splice(2, 3, 1000, 2000, 300, 400, 500); // print deleted value in the arrys 
 console.log(delVal);

 let obj = [5, 6, 7, 8];
//  obj.pop();
 console.log(obj.length);

 