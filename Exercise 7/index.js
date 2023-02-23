class Password {
    constructor() {
        console.log("Welcome To Password Generator ");
        this.pass = "";


    }
    generatePassword(len) {
        let char = "abcdefghijklmnopqrstyvwxyz";
        let numbers = "1234567890";
        let special = "!@#$%^&*";
        if (len < 3) {
            console.log("Your Passwrod Must be atleast 3 characters long");
        }
        else {
            let i = 0;
            while (i < len) {
                {
                    this.pass += char[Math.floor(Math.random() * char.length)];
                    this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                    this.pass += special[Math.floor(Math.random() * special.length)];
                    i += 3;
                }

            }
            // this.pass = this.pass.substr(0, len);
            return this.pass;
        }

    }
}

let x = new Password();
console.log(x.generatePassword(10));

// FOR NONE CODING TIME WHEN I NOT ABLE TO WRITE CODE 
console.log("Tomorrow is Tanay Bhaiya event ");
console.log("20 Feb, External Exammination");

setTimeout(()=>{
    console.log("Finally I Meet With Tanay Bhaiya in IIIT Delhi\n And This is very imformative session for me.");
}, 5000);


function PrintHello(){
    console.log("Hello World By Using Function ! Date: 22/02/2023");
}
PrintHello();
