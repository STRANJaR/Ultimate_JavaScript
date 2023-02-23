// / QUESTION 1 : Write a JS Program to print the folowing after 2 second delay.
// Hello
// World


// SELF TRY 
// const x = {
//     val1: "Hello",
//     val2: "World",
//     final: function(){
//         setTimeout(()=>{
//             console.log(`${this.val1}\n${this.val2}`);
//         }, 2000)
//     }
// }
// x.final();


const a = async (text) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(text);
        },2000)
    })
}
 
(
    async ()=>{
        let text = await a("Hello")
        console.log(text);
        let text2 = await a("World")
        console.log(text);

    }
)()
// QUESTION 2 : Write a code JS Program to fidn average of of numbers in an array using spread 
// of syntax 
function sum (a,b,c) {
    return a+b+c;
}
let x = [1,2,3];
console.log(sum(...x));



// QUESTION 3 :
(async ()=>{
        let text = await a("I am Resolving 2 seconds", 2);
        console.log(text);
        let text2 = await a("I am Resolving 5 seconds", 5);
        console.log(text2);

    }
)();



// QUESTION 4 : Write a simple interest calculator using JavaScirpt 
function simpleInterest(p,r,t){
    return (p*r*t) / 100;
}

console.log (simpleInterest(1000,5,1));