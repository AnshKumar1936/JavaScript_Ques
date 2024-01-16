const prompt = require('prompt-sync')();
let guessNum=10;

let userNum = prompt("Enter the Number Between 1 to 50 :");

while(userNum!=guessNum){
    userNum=prompt("Wrong Guess❌. Guess again")
}

console.log("You entered the Right number✅");