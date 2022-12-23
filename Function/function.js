function onePlushAvg(x,y){
   return Math.round( 1 + (x + y)/2) 
}

const hello = ()=>{
    console.log("Hello Buddy. How are You ?");
    return "Hi";
}
let ret = hello();
console.log(ret);
let a = 1;
let b = 3;
let c = 6;

console.log("One plush avrage of a and b is: ", onePlushAvg(a,b));
console.log("One plush avrage of b and c is: ", onePlushAvg(b,c));
console.log("One plush avrage of c and a is: ", onePlushAvg(c,a));


