let items=["mango","apple","litchi"];
let price=[10,20,30];

//push add elements at the end
items.push("watermelon","muskmelon","orange");
console.log(items);

//pop delete last items from array
items.pop();
console.log(items);

//convert array ti String
console.log(items.toString());

//concat add two arrays together
console.log(items.concat(price));

//unshift add elements to start
price.unshift(40);
console.log(price);

//shift delete element from start
price.shift();
console.log(price);

//slice gives small part of array
console.log(items.slice(1,3))

//splice do change to original array
console.log(price.splice(1,1));


