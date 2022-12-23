// Que 1:
console.log("Roh\"".length);

// Que 2: 
// includes
const sent  = 'Hello world welcome to JavaScript';
const word = 'welcome';
console.log(`The word ${word} ${sent.includes(word) ? 'is': 'is not'} in the sentence`);

// startWith & endWith 
const str = 'Hey how are you ?';
console.log(str.startsWith('Hey'));
console.log(str.endsWith("you?"));

// Que 3:
const name = "Rohit";
console.log(name.toLowerCase());

// Que 4: 
let str2 = "Please give Rs 1000";
let ammount = Number.parseInt(str2.slice("Please give Rs ".length));
console.log(typeof ammount);

// Que 5:
let ch = "Rohit";
let newCh = ch.replace("i","e");
console.log(newCh); 