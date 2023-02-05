class Animal {
    constructor(name, color){
        this.name = name;
        this.color = color;

    }
    run(){
        console.log(this.name + " is running !");
    }
    shout(){
        console.log(this.name + " is shouting !");
    }
}

class Monkey extends Animal{
    eatBnana() {
        console.log(this.name + " is eating banana");
    }
   
}

let ani = new Animal("Bruno", "White");
let monk = new  Monkey("Chunkie", "Brown");

ani.shout();
monk.eatBnana();

// ani.eatBnana();       This will throw an error...
