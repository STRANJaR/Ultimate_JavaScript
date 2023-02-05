class railwayForm  {
    constructor(givenname, trainno, trainName){
        console.log("CUNSTRUCTOR CALLED..." + givenname + " " + trainName + " " + trainno);
        this.name = givenname;
        this.trainName = trainName;
        this.trainno = trainno;
    }
    submit(){
        alert(`${this.name} Your Train in Booked Successfully ! Train : (${this.trainno})  ${this.trainName} `);
    }
    cancle(){
        alert(`${this.name} Your Booking is Cancelled Now ! Train : (${this.trainno})  ${this.trainName}`);
    }

    // fill(givenname, trainno, trainName){
    //     this.name = givenname;
    //     this.trainno = trainno;
    //     this.trainName = trainName;
    // }

}


// TRAIN FORM FOR ROHIT 
let rohitForm = new railwayForm("Rohit", 12560,"Shramjeevi Exp.");
// rohitForm.fill("Rohit", 12645, "Shramjeevi Exp.");

// TRAIN FORM FOR AKASH 
let akashForm = new railwayForm("Akash", 55555,"Vande Bharat Exp.");
// akashForm.fill("Akash", 55555, "Vande Bharat Exp.");

// ANOTHER TRAIN FORM FOR AKASH 
let akashForm2 = new railwayForm("Akash", 87222,"Randhani Exp.");
// akashForm2.fill("Akash", 87222, "Randhani Exp.");

// RESPONSE 
rohitForm.submit();
akashForm.cancle();
akashForm2.submit();