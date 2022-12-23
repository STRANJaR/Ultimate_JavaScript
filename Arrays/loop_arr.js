let num = [5, 7, 2, 4, 3];

for (let i=0; i<num.length; i++){
    // console.log(num[i]);
}

num.forEach((element)=>{
    console.log(element*element);
})

// Array.from 
let name = "Rohit";
let arr = Array.from(name);
console.log(arr);

// for...of Loop
for(let item of num){
    console.log(item);
}

// for...in Loop
for(let i in num){
    console.log(i);  // this  print only keys
    console.log(num[i]); // This print actual value.
}
