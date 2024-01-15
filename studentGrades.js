const prompt = require('prompt-sync')();
let marks = prompt("Enter the marks of Student:");



if(marks>=90 && marks<101){
    console.log("You got A grade");
}
else if(marks>=70 && marks<=89){
    console.log("You got B grade");
}
else if(marks>=60 && marks<=79){
    console.log("You got C grade");
}
else if(marks>=50 && marks<=59){
    console.log("You got D grade");
}
else if(marks>=0 && marks<=49){
    console.log("You got F grade");
}