// QUESTION 1 

class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
    get real(){
        return this._real;

    }
    get imaginary(){
        return this._imaginary;

    }
    set real(newReal){
        this._real = newReal;
    }
    set imaginary(newImaginary){
        this._imaginary = newImaginary;
    }
} 

let a = new Complex(2, 4);
a.real = 10;
a.imaginary = 10
let b = new Complex(5, 6);
a.add(b);
console.log(`${a.real}+${a.imaginary}i`);

// QUESTION 3 PART HERE 

// QUESTION 2 

// class Human{
//     constructor(name, favFood){
//         this.name = name;
//         this.favFood = favFood;

//     }
//     walk(){
//         console.log(this.name + " Human Is Walking...");
//     }
// }

// class Student extends Human{
//     walk(){
//         console.log(this.name + " Student Is Walking...");
//     }

// }

// let o = new Student("Rohit", "Chicken");
// o.walk();

// console.log(o instanceof Human);

