const clickButton=document.getElementById("clickButton");
const clickCountDisplay=document.getElementById("clickCountDisplay");
const Upgrade1=document.getElementById("Upgrade1");
const SlotMachine=document.getElementById("SlotMachine");
const ClickSfx=document.getElementById("ClickSfx");
const SlotMachine2=document.getElementById("SlotMachine2");
const ekhSfx=document.getElementById("ekhSfx");

let clickCount = 0;
let costOfUpgrade1= 10;
let multiplier=1;
let upgradeCost=2;
let costOfSlotMachine=100;

function clicksDisplaied(){
    clickCountDisplay.innerText="you have clicked the button: "+ clickCount + " times!"
};
clickButton.addEventListener("click", ()=>{
    clickCount+=multiplier
    clicksDisplaied();
    ekhSfx.play();
ekhSfx.currentTime=0;
});

Upgrade1.addEventListener("click", ()=>{
if (clickCount >= costOfUpgrade1){
    clickCount-= costOfUpgrade1;
    multiplier++;
    costOfUpgrade1*=2;
    clicksDisplaied();
    Upgrade1.innerText= "upgrade for "+ costOfUpgrade1 + " clicks"
}
else{
    clickCountDisplay.innerText="not enough clicks."
}
});
SlotMachine.addEventListener("click", ()=>{
if(clickCount >= costOfSlotMachine){
    clickCount-= costOfSlotMachine;
    let chance = Math.random();
    if (chance < 0.1)
        SlotMachine.innerText="you Win common prize"
        else{
        SlotMachine.innerText="you Lose"
    }
}
});
SlotMachine2.addEventListener("input", ()=>{
if(clickCount >= costOfSlotMachine){
    clickCount-= costOfSlotMachine;
    let chance = Math.random();
    if (chance < 0.01)
        SlotMachine.innerText="you Win rare prize";
    else{
        SlotMachine.innerText="you Lose";
        let aud
    }
}
});