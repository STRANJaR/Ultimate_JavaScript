let a = {
    name1: "Rohit",
    language: "JavaScript",
    run: ()=>{
        alert("Self Run...");
    }
}

console.log(a);

let p = {
    run: ()=>{
        alert("Run...");
    }
}
p.__proto__ = {
    name: "Harry"
}

 a.__proto__ = p
 a.run();
 console.log(a.name);  


//  MDN REFRENCE 
 const  fam = {
    name3: "Rohan",
    language1: "Python",
    city: "New Delhi",
    greet(){
        alert(`Greeting from ${fam.city}`);
    }
 }

 fam.greet();