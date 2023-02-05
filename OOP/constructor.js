class railwayForm  {
    constructor(givenname, trainno, trainName,address){
        console.log("CUNSTRUCTOR >>> " + givenname + " " + trainName + " " + trainno);
        this.name = givenname;
        this.trainName = trainName;
        this.trainno = trainno; 
        this.add = address;
    }
    preview(){
        alert(`${this.name} Your Train For ! Train : (${this.trainno})  ${this.trainName}  Your address is : ${this.add}`);
    }
    submit(){
        alert(`${this.name} Your Train in Booked Successfully ! Train : (${this.trainno})  ${this.trainName}  Your address is : ${this.add}`);
    }
    cancle(){
        alert(`${this.name} Your Booking is Cancelled Now ! Train : (${this.trainno})  ${this.trainName}`);
    }
}

let rohitForm = new railwayForm("Rohit", 12546, "Shramjeevi Exp.", "Medanipur, Rohtas, Bihar, 802211");

rohitForm.preview();
rohitForm.submit();
rohitForm.cancle();
rohitForm.preview();
