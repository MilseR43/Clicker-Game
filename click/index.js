const clickButton=document.getElementById("clickButton");
const clickCountDisplay=document.getElementById("clickCountDisplay");
const Upgrade1=document.getElementById("Upgrade1")
let clickCount = 0; 

clickButton.addEventListener("click", ()=>{
    clickCount+=1;
    clickCountDisplay.innerText=clickCount;
});

Upgrade1.addEventListener("click,", ()=>{
if (clickCountDisplay >=10){
clickCountDisplay.innerText=clickCount-10;
}
});