let modeBtn = document.querySelector("#mode");
let current_mode= "light";

modeBtn.addEventListener("click", () => {
    if(current_mode==="dark"){
        current_mode="light";
        document.querySelector("body").style.backgroundColor = "white";
    }else{
        current_mode="dark"
        document.querySelector("body").style.backgroundColor = "black";
    }
    console.log(current_mode)
});

 