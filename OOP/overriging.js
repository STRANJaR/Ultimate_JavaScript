class Employee{
    constructor(name){
        console.log(`${name} Employee's constructor is here !`);
        this.name = name;
    }
    login(){
        console.log(`Employee has logged In`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeave(leaves){
        console.log(`Employee has requested ${leaves} leaves + Auto approved`);
    }
}

class Programmer extends Employee{
    // constructor(arg){     ---> if there is no constructor in the child class, this is created automagically.
    //     super(arg);
    // }

    constructor(name){
        super(name); 
        console.log(`This is a newly written constructor`);
    }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeave(leaves){
        // console.log(`Employee has requested ${leaves+1} leaves + [one extra] `);
        super.requestLeave(leaves);
        console.log("One Extra is Quearanted")
    }
}

let e1 = new Programmer("Rohit");
e1.login();
e1.requestLeave(0); 

