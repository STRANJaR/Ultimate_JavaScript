// Using single line in arrow function when only one statement can be executed
const sayHello = (name, greet)=> console.log(greet + " " + name); 

sayHello("Good Morning", "Rohit");



// Concept 

const  x = {
    name: "Rohit",
    role: "JS Developer",
    exp: "3 Years",
    show: function(){
        let that = this;
        setTimeout(function(){
            // console.log(this);
            console.log(`The name is ${that.name}\nThe role is ${that.role}`);
        }, 2000)
        
    }
}

x.show();


// LEXICAL THIS CONCEPT (ARROW FUNCTION) 
const  x = {
    name: "Rohit",
    role: "JS Developer",
    exp: "3 Years",
    show: function(){
        
        setTimeout(()=>{
       
            console.log(`The name is ${this.name}\nThe role is ${this.role}`);
        }, 2000)
        
    }
}

x.show();

