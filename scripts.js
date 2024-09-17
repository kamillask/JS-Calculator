let left = "";
let right = "";
let operator = "";
let operatorSelected = false;


//DISPLAY
const display = document.querySelector(".IO");
display.textContent = "";

//CLEAR FUNCTIONS
const resetButton = document.querySelector(".clear");
function clear() {
    display.textContent = "";
    left = "";
    right = "";
    operator = "";
    operatorSelected = false;
}
function clearDisplay(){
    display.textContent = "";
}
resetButton.addEventListener("click", () => {
    clear();
});

//POPULATING LEFT, RIGHT, OPERATOR
const numButtons = document.querySelector(".keypad");
numButtons.addEventListener("click", (event) => {
    let target = event.target;
    if(target.className==="number"){
        display.textContent += target.id;
        if(operatorSelected === false){
            left += target.id;
        } else{
            right += target.id;
        }
    }
    if(target.className==="operator"){
        clearDisplay();
        operator = target.id;
        operatorSelected = true;
    }
    if(target.className==="calculate"){
        calculate();
    }
})

//MATH FUNCTIONS
function add(){
    let sum = Number(left)+Number(right);
    display.textContent = sum;
}
function subtract(){
    let difference = Number(left)-Number(right);
    display.textContent = difference;
}
function multiply(){
    let product = Number(left)*Number(right);
    display.textContent = product;
}
function divide(){
    let quotient = Number(left)/Number(right);
    display.textContent = quotient;
}

//CALCULATION
function calculate() {
    if(operator==="/" && right==0){      //== right now, maybe ===?
        alert("Can't divide by zero.");
        clear();
    }
    if(left==="" || operator==="" || right===""){
        return;
    }
    if(operator==="+"){
        add();
        operatorSelected = false;
    }
    if(operator==="-"){
        subtract();
        operatorSelected = false;
    }
    if(operator==="x"){
        multiply();
        operatorSelected = false;
    }
    if(operator==="/"){
        divide();
        operatorSelected = false;
    }

}

