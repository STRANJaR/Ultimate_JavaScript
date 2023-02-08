class Animal{
    constructor(name){
        this._name = name;
    }

    fly(){
        alert("Mai UDD rha hu..");
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}

class Rabbit extends Animal{             // inportaint class.
    eatCarrot(){
        console.log("Eating Carrot !");
    }
}

let j = new Rabbit("Albert");
j.fly();
console.log(j.name);
j.name = "Brunoo";
console.log(j.name);


let c = 44;
console.log(j instanceof Rabbit);   // inportaint line of code...
console.log(j instanceof Animal);
console.log(c instanceof Animal);
