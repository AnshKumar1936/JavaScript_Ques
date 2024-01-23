const prompt = require('prompt-sync')();

let Name=prompt("Enter your full name:");

let UserName ="Your UserName is: " +"@"+ Name + "123";

console.log(UserName);
console.log(Name.length);