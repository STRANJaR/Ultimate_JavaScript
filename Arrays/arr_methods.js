// Array Methods

let num = [1, 2, 4, 5, 6];
let b = num.toString();
console.log(typeof b);

let c = num.join("_");
console.log(c, typeof c);

let r = num.pop(); // pop return the return value.
console.log(num);

let  s = num.push(56);
console.log(num, s);

let shift = num.shift(); // remove an element from start from the array
console.log(shift, num);

let uns = num.unshift(567); 
console.log(uns, num); 
