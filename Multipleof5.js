const prompt = require('prompt-sync')();
let num = prompt("enter the value of num");

if(num%5==0){
    console.log("The number is multiple of 5");
}else{
    console.log("The number is not a multiple of 5");
}