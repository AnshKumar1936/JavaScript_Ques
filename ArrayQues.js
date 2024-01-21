let prices=[250,645,300,900,50];
let offer;
let items;
for(let i=0;i<5;i++){
    let offer=(prices[i]*10)/100;
    let items=prices[i]-offer;
    // console.log("Initial prices of "+ (i+1) + " product:"+ prices[i])
    // console.log("10% offer on "+(i+1)+" prices:"+ offer);
    console.log("Prices after 10% discount:"+ items);
    
}
