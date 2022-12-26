/* Que: Write a JS program to generate a random number and store it in a variable. The program them takes an input from the user to tell them whether
   the guess was correct, greater or lower than the origional number. (100 - number) is the score of the user the program is expected to terminate ance
   the number is guessed. Number should be between 1 - 100. */

let x = Math.floor(Math.random() * 100) + 1;
let input;
let guess = 0; 

for(i=1; i<=100; i++){
    input = Number.parseInt(prompt("\nGUESS THE NUMBER B/W (1 - 100): "));
    guess ++;
    if(input == x){
        console.log("CONGRATULATION'S! YOU GUESS THE CORRECT NUMBER.");
        console.log("YOUR GUESS TAKEN TIME IS: " + guess + " \nTOTAL SCORE 100, AND YOUR SCORE IS: " + ( 100 - guess));
        break;
    }
    else if(x < input){
        console.log("ORIGIONAL NUMBER IS SMALLER THAN < YOUR NUMBER");
    }
    else if(x > input){
        console.log("ORIGIONAL NUMBER IS GREATER THAN > YOUR NUMBER");
    }

}                                                       
                                                                                                                                                      
