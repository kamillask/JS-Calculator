let left = "";
let right = "";
let operator = "";
let operatorSelected = false;
let result = "";

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
    result = "";
}
function clearData(){
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
        if(left==="" && right==="" && operator==="" && operatorSelected===false){
            clearDisplay();
            result = "";
        }
        display.textContent += target.id;
        if(operatorSelected === false){
            left += target.id;
        } else{
            right += target.id;
        }
    }
    if(target.className==="operator"){
        if(left===""){
            if(result===""){
                alert("Enter a number first.");
                return;
            } else{
                left = result;
            }
            
        }
        if(operatorSelected===true){
            alert("Only one set of numbers at a time.");
            return;
        }
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
    result = sum;
    clearData();
}
function subtract(){
    let difference = Number(left)-Number(right);
    display.textContent = difference;
    result = difference;
    clearData();
}
function multiply(){
    let product = Number(left)*Number(right);
    display.textContent = product;
    result = product;
    clearData();
}
function divide(){
    let quotient = Number(left)/Number(right);
    display.textContent = quotient;
    result = quotient;
    clearData();
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

