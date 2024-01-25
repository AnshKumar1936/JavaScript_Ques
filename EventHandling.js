let btn1 = document.createElement("btn1");


let div =document.querySelector("div");
div.onclick = () =>{
    console.log("You Are Inside Div")
}

// div.onmouseover =(e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX , e.clientY);
// };


div.addEventListener("click",(e)=>{
    console.log("button1 was clicked!");
    console.log(e);
    console.log(e.type);

});

const times3 = () => {
    console.log("button1 was clicked! 3 times");

};
div.addEventListener("click",times3);

div.addEventListener("click",()=>{
    console.log("button1 was clicked! 3 times");

});



div.removeEventListener("click",()=>{
    console.log("button1 was clicked! 3 times");

});