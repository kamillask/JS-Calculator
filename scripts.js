let left = "";
let right = "";
let operator = "";
let operatorSelected = false;
let decimalSelected = false;
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
    decimalSelected = false;
    result = "";
}
function clearData(){
    left = "";
    right = "";
    operator = "";
    operatorSelected = false;
    decimalSelected = false;
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
        //DECIMAL LOGIC
        if(target.id==="."){
            if(decimalSelected===true){
                alert("You can only have one decimal.");
                return;
            } else{
                decimalSelected = true;
            }
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
        decimalSelected = false;
    }

    if(target.className==="calculate"){
        calculate();
    }
    if(target.className==="backspace"){
        if(left==="" && right===""){
            return;
        }
        if(operatorSelected===false){
            left = left.slice(0,-1);
            display.textContent = display.textContent.slice(0,-1);
        } else{
            right = right.slice(0,-1);
            display.textContent = display.textContent.slice(0,-1);
        }
    }
})

//KEYBOARD SUPPORT
document.addEventListener("keydown", (event) => {
    // alert(event.key);
    if(event.key>=0 && event.key<=9 || event.key==="."){
        if(left==="" && right==="" && operator==="" && operatorSelected===false){
            clearDisplay();
            result = "";
        }
        //DECIMAL LOGIC
        if(event.key==="."){
            if(decimalSelected===true){
                alert("You can only have one decimal.");
                return;
            } else{
                decimalSelected = true;
            }
        }
        display.textContent += event.key;
        if(operatorSelected === false){
            left += event.key;
        } else{
            right += event.key;
        }
    }
    if(event.key==="%" || event.key==="^" || event.key==="/" || event.key==="*" || event.key==="-" || event.key==="+"){
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
        operator = event.key;
        operatorSelected = true;
        decimalSelected = false;
    }

    if(event.key==="Enter"){
        document.activeElement.blur(); //removes focus from number key, without this keeps pressing last key pressed
        calculate();
    }
    if(event.key==="Backspace"){
        if(left==="" && right===""){
            return;
        }
        if(operatorSelected===false){
            left = left.slice(0,-1);
            display.textContent = display.textContent.slice(0,-1);
        } else{
            right = right.slice(0,-1);
            display.textContent = display.textContent.slice(0,-1);
        }
    }
    if(event.key==="Escape"){
        clear();
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
function raise(){
    let power = Number(left)**Number(right);
    display.textContent = power;
    result = power;
    clearData();
}
function percentage(){
    let percentage = (Number(left)/100)*Number(right);
    display.textContent = percentage;
    result = percentage;
    clearData();
}

//CALCULATION
function calculate() {
    if(operator==="/" && right==0){      
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
    if(operator==="x" || operator==="*"){
        multiply();
        operatorSelected = false;
    }
    if(operator==="/"){
        divide();
        operatorSelected = false;
    }
    if(operator==="^"){
        raise();
        operatorSelected = false;
    }
    if(operator==="%"){
        percentage();
        operatorSelected = false;
    }
}

