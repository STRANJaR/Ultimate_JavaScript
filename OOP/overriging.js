class Employee{
    login(){
        console.log(`Employee has logged In`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeave(leaves){
        console.log(`Employee has requested ${leaves} leaves `);
    }
}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeave(leaves){
        // console.log(`Employee has requested ${leaves+1} leaves + [one extra] `);
        super.requestLeave(leaves);
    }
}

let e1 = new Programmer();
e1.login();
e1.requestLeave(3);